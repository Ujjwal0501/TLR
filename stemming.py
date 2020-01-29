# importing application specific code
import patterns

from nltk.stem import PorterStemmer 
from nltk.tokenize import word_tokenize 
from nltk.corpus import stopwords 


ps = PorterStemmer() 
stop_words = set(stopwords.words('english')) 


# --------------------------------------------------------------
# function for stemming the sentences
def stem_sentences(sentence):
    words = word_tokenize(sentence) 
    stemmed_list = []

    for w in words: 
        stemmed_list += [ps.stem(w)]

    return stemmed_list
# --------------------------------------------------------------




# --------------------------------------------------------------
# getting stemmed-patterns-list
patterns_list = patterns.get_patterns()
stemmed_patterns_list = []

for sentence in patterns_list:
    stemmed_patterns_list += stem_sentences(sentence)
# --------------------------------------------------------------




# print(len(stemmed_patterns_list))


# --------------------------------------------------------------
# removing stopwords from the stemmed-patterns-list
def create_filtered_stemmed_patterns_list(passed_list):
    return [w for w in passed_list if not w in stop_words] 
# -----------------------------------------------------------------





# print(len(create_filtered_stemmed_patterns_list(stemmed_patterns_list)))
