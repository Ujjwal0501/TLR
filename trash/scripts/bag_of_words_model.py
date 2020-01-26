# Imports
import pandas as pd

# Read in file
data = pd.read_csv('data.csv')


#Rename the columns
# data = data.rename(columns={'Category': 'category', 'Descript': 'message'})
# data = data['category']


# print(type(data))



"""
ML
"""
import re
import numpy as np
from nltk.corpus import stopwords
from nltk.stem import SnowballStemmer
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.svm import LinearSVC
from sklearn.pipeline import Pipeline
from sklearn.model_selection import train_test_split
from sklearn.feature_selection import SelectKBest, chi2

removal = SnowballStemmer('english')
stoppingwords = stopwords.words("english")

data['column'] = data['message'].apply(lambda x: " ".join([removal.stem(i) for i in re.sub("[^a-zA-Z]", " ", x).split() if i not in stoppingwords]).lower())

# print(data['column'])

X_train, X_test, y_train, y_test = train_test_split(data['column'], data.category, test_size=0.2)



pipeline = Pipeline([('vect', TfidfVectorizer(ngram_range=(1, 2), stop_words="english", sublinear_tf=True)),
                     ('chi',  SelectKBest(chi2, k=15)),
                     ('clf', LinearSVC(C=1.0, penalty='l1', max_iter=25000, dual=False))])

# print(X_train)

model = pipeline.fit(X_train, y_train)

vectorizer = model.named_steps['vect']
chi = model.named_steps['chi']
clf = model.named_steps['clf']

feature_names = vectorizer.get_feature_names()
feature_names = [feature_names[i] for i in chi.get_support(indices=True)]
feature_names = np.asarray(feature_names)

target_names = ['Assault', 'Auto Theft', 'Break/Enter', 'Bike Theft', 'Sexual Assault', 'Theft', 'Violence']
# print("top 10 keystoppingwords per class:")
for i, label in enumerate(target_names):
    top10 = np.argsort(clf.coef_[i])[-10:]
#     print("%s: %s" % (label, " ".join(feature_names[top10])))

# print("accuracy score: " + str(model.score(X_test, y_test)))



def predict_crime(report):
    return model.predict([report])
    


def crime_binary(report):
    score = predict_crime(report)
    if(score in target_names):
        return True
    else:
        return False
    
    
sentence = input()
print(predict_crime(sentence))

# print(model.predict(['ujjwal was stabbing many girls at the same time.']))

# # Export to CSV
# data.to_csv('output_data.csv')
