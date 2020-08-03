import json

def get_patterns():
    with open('intents.json', 'r', encoding = 'utf-8') as json_data:
        intents = json.load(json_data)


    patterns = []

    for i in range(len(intents['intents'])):
#         print(intents['intents'][i]['patterns'])
        patterns += intents['intents'][i]['patterns']
        
    return patterns
    
    
# print(patterns)