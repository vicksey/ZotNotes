from pymilvus import MilvusClient
import json
from langchain_openai import OpenAIEmbeddings
import zillis_insert
from zilliz_test import set_data_format
from zillis_insert import send_data

# (Continued)


set_data_format()
set_data_format()


CLUSTER_ENDPOINT="https://in03-3e5c99cbd542d30.api.gcp-us-west1.zillizcloud.com" # Set your cluster endpoint
TOKEN="2e5dfdc1bb80f259073e38449ec71f5bfb5e71eb07f3d8aa9e72ab6d4e717872573720eb43c9c0836b498544d94a8e1feab0280d" # Set your token
COLLECTION_NAME="IrvineHacks2024"
OPENAI_API_KEY = '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'

# Read the dataset
def get_search_results(query = "what is deep learning?"):
    client = MilvusClient(
        uri=CLUSTER_ENDPOINT,  # Cluster endpoint obtained from the console
        token=TOKEN  # API key or a colon-separated cluster username and password
    )

    embedding = OpenAIEmbeddings(openai_api_key=OPENAI_API_KEY)
    data = {"sentence": query, "sentence_vector": embedding.embed_query(query)}
    amount = 50
    # single vector search
    res = client.search(
        collection_name=COLLECTION_NAME,
        data=[data["sentence_vector"]],
        output_fields=["sentence"],
        limit=amount
    )
    search_results = ''
    for i in res[0]:
        search_results = search_results + (i["entity"]['sentence']) + '\n'
    return search_results

print(get_search_results())