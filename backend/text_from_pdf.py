from fastapi import FastAPI
from pymilvus import connections, FieldSchema, CollectionSchema, DataType, Collection, utility

app = FastAPI()

CLUSTER_ENDPOINT = "https://in03-3e5c99cbd542d30.api.gcp-us-west1.zillizcloud.com"  # Set your cluster endpoint
TOKEN = "2e5dfdc1bb80f259073e38449ec71f5bfb5e71eb07f3d8aa9e72ab6d4e717872573720eb43c9c0836b498544d94a8e1feab0280d"  # Set your token
COLLECTION_NAME = "IrvineHacks2024"  # Set your collection name


@app.post("/set_data_format/")
async def set_data_format(COLLECTION_NAME = "IrvineHacks2024"):
    # 1. Connect to cluster
    connections.connect(
        alias='default',
        uri=CLUSTER_ENDPOINT,
        token=TOKEN,
    )

    # 2. Define fields
    fields = [
        FieldSchema(name="id", dtype=DataType.INT64, is_primary=True, auto_id=True, max_length=100),
        FieldSchema(name="sentence", dtype=DataType.VARCHAR, max_length=10000),
        FieldSchema(name="sentence_vector", dtype=DataType.FLOAT_VECTOR, dim=1536)
    ]

    # 3. Create schema with dynamic field enabled
    schema = CollectionSchema(
        fields,
        "The schema for a medium news collection",
        enable_dynamic_field=True
    )

    # 4. Create collection
    collection = Collection(COLLECTION_NAME, schema)

    # 5. Index collection
    index_params = {
        "index_type": "AUTOINDEX",
        "metric_type": "L2",
        "params": {}
    }

    collection.create_index(
        field_name="sentence_vector",
        index_params=index_params
    )

    collection.load()

    # Get loading progress
    progress = utility.loading_progress(COLLECTION_NAME)

    return {"message": "Data format set successfully"}

# Example usage
'''pdf_url = "https://wolfpaulus.com/wp-content/uploads/2017/05/field-guide-to-data-science.pdf"
print(1)
extracted_text = extract_text_from_remote_pdf(pdf_url)
print(2)


OPENAI_API_KEY = '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'
ZILLIZ_KEY = '2e5dfdc1bb80f259073e38449ec71f5bfb5e71eb07f3d8aa9e72ab6d4e717872573720eb43c9c0836b498544d94a8e1feab0280d'
COLLECTION_NAME = "IrvineHacks24"

embedding = OpenAIEmbeddings(openai_api_key=OPENAI_API_KEY)
print(3)
if extracted_text:
    extracted_text = extracted_text.split(".")
print(4)

embeddings = embedding.embed_documents(texts = [t for t in extracted_text])

json_embeddings = {'id': 0, 'sentence': extracted_text[0]}

sentence_embeddings = embedding.embed_query(json_embeddings['sentence'])
print(sentence_embeddings)

client = MilvusClient(
    uri="https://in03-3e5c99cbd542d30.api.gcp-us-west1.zillizcloud.com", # Cluster endpoint obtained from the console
    token=ZILLIZ_KEY # API key or a colon-separated cluster username and password
)

# Create a collection
client.create_collection(
    collection_name=COLLECTION_NAME,
    dimension=768
)'''