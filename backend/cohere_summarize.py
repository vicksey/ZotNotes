import cohere
co = cohere.Client('aT9QlRvzN6zgm2QB3EtGLC88sQUKp7Fy5uhviesA')

response = co.generate(
    model = 'command',
    prompt = 'Hello, tell me a joke',
    max_tokens= 50,
    temperature = 0.8,
    

)

print(response.generations[0].text)