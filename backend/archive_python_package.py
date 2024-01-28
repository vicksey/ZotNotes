from fastapi import FastAPI, HTTPException
from fastapi.responses import JSONResponse
from internetarchive import get_item, search_items
import json
import os

app = FastAPI()

json_file_path_info = 'C:\\Users\\vicky\\ZotNotes\\backend\\textbook_info.json'
json_file_path_urls = 'C:\\Users\\vicky\\ZotNotes\\backend\\textbook_urls.json'

file_urls = []
all_metadata_info = []

@app.get("/search")
async def search_books(search_topic: str = 'America\'s Civil War'):
    try:
        query = f'{search_topic} AND language:english AND date:[2000-01-01 TO *]'
        params = {
            'sort': 'date',
            'rows': 50
        }
        search = search_items(query, params=params)
        count = 0

        for result in search:
            count += 1
            identifier = result['identifier']

            item = get_item(identifier)
            files = item.files

            metadata_info = {'identifier': identifier, 'metadata': {}}

            for k, v in item.metadata.items():
                metadata_info['metadata'][k] = v

            all_metadata_info.append(metadata_info)

            md = {'collection': item.metadata.get('collection', ''),
                  'title': item.metadata.get('title', ''),
                  'mediatype': item.metadata.get('mediatype', '')}

            response_list = get_item(identifier).upload(files=[], metadata=md, access_key='CvByJt4oEjH0zd4b', secret_key='J1BUoThLltBDXilm')

            if response_list and 'success' in response_list[0] and response_list[0]['success']:
                print("Upload successful")
            else:
                print("Upload failed")

            for file in files:
                file_name = file['name']
                file_format = file['format']

                if str(file_name).lower().endswith('.pdf'):
                    file_url = f'https://archive.org/download/{identifier}/{file_name}'
                    print(file_url)
                    file_urls.append({'identifier': identifier, 'file_url': file_url, 'file_name': file_name, 'file_format': file_format})

            if count == 50:
                break

        with open(json_file_path_info, 'w') as json_file_info:
            json.dump(all_metadata_info, json_file_info, indent=2)
            json_file_info.write('\n')

        with open(json_file_path_urls, 'w') as json_file:
            json.dump(file_urls, json_file, indent=2)

        return JSONResponse(content={"message": "Search and upload completed successfully."})

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Additional FastAPI settings or middleware can be added as needed



    # item.metadata keys:
    # ['identifier', 'collection', 'creator', 'date', 'description', 'imagecount', 'isbn', 'language', 'lccn', 'licenseurl',
    # 'mediatype', 'oclc-id', 'publisher', 'scanner', 'source', 'subject', 'thoth-dissemination-service', 'thoth-work-id', 'title',
    # 'uploader', 'publicdate', 'addeddate', 'identifier-access', 'identifier-ark', 'ppi', 'ocr', 'ocr_parameters',
    # 'ocr_module_version', 'ocr_detected_script', 'ocr_detected_script_conf', 'ocr_detected_lang', 'ocr_detected_lang_conf',
    # 'page_number_confidence']

    #https://archive.org/details/<identifier>