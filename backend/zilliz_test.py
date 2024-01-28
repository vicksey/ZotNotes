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