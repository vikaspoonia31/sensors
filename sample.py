import requests

#declare threshold values for parameters
threshold_temp=22.00
threshold_GSR=710.00
threshold_ECG=0

#declare the URL having the sensor values
link = "http://127.0.0.1:3002/"
f = requests.get(link)

#parse the temp, GSR and ECG values from last
sub_index_temp = f.text.rfind('TEMP: ')
sub_index_GSR= f.text.rfind('GSRsensorValue= ')
sub_index_ECG= f.text.rfind('ECGsensorValue= ')

if(float(f.text[sub_index_temp+6:sub_index_temp+11])>threshold_temp):
    print("Risk!!! Temperature is high")

if(float(f.text[sub_index_GSR+16:sub_index_GSR+19])>threshold_GSR):
    print("Risk!!! GSR is high")

if(float(f.text[sub_index_ECG+16:sub_index_ECG+17])>threshold_GSR):
    print("Risk!!! ECG is high")