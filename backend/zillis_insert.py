from pymilvus import MilvusClient
import text_from_pdf
import zilliz_test
from langchain_openai import OpenAIEmbeddings
import json

CLUSTER_ENDPOINT="https://in03-3e5c99cbd542d30.api.gcp-us-west1.zillizcloud.com" # Set your cluster endpoint
TOKEN="2e5dfdc1bb80f259073e38449ec71f5bfb5e71eb07f3d8aa9e72ab6d4e717872573720eb43c9c0836b498544d94a8e1feab0280d" # Set your token

#sample_url="https://wolfpaulus.com/wp-content/uploads/2017/05/field-guide-to-data-science.pdf"

def send_data(url, COLLECTION_NAME="IrvineHacks2024"):
    OPENAI_API_KEY = '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'

    sentences = text_from_pdf.extract_text_from_remote_pdf(url)
    embedding = OpenAIEmbeddings(openai_api_key=OPENAI_API_KEY)

    client = MilvusClient(
        uri=CLUSTER_ENDPOINT, # Cluster endpoint obtained from the console
        token=TOKEN # API key or a colon-separated cluster username and password
    )
    for sentence in sentences:
        data_entry = {"sentence" :sentence, "sentence_vector" : embedding.embed_query(sentence)}

        # Insert multiple entities
        res = client.insert(
          collection_name=COLLECTION_NAME,
          data=data_entry
        )