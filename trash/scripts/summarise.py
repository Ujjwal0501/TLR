import nltk
from nltk.stem import PorterStemmer
nltk.download('stopwords')

from nltk.corpus import stopwords
               

stemmer = PorterStemmer()


def tokenize_report(para):
    sentences = nltk.sent_tokenize(para)
    for i in range(len(sentences)):
        words = nltk.word_tokenize(sentences[i])
    return (set(words) - set(stopwords.words('english')))


# Stemming
def summarise(para):
    sentences = nltk.sent_tokenize(para)

    for i in range(len(sentences)):
        words = nltk.word_tokenize(sentences[i])
        words = [stemmer.stem(word) for word in words if word not in set(stopwords.words('english'))]
        sentences[i] = ' '.join(words)   
    
    return sentences
    
parag = input("Enter the line:")

# print(summarise(parag))
print(tokenize_report(parag))