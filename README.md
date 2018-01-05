# repository for Lab 1 assessment for Dev283-x Intro to node.js 

## overview 
The assignment lab for this module is to build a node script to convert CSV files to JSON files. 

## Assignment Instructions

Imagine you work at a Bitcoin exchange and you have customer information coming from another source: SSN, credit card and their bitcoin numbers. However, the file format is CSV and your exchange can only support JSON. **Your task is to write a Node script to convert CSV into JSON.**

You can download the customer information CSV file here: Link to download: customer-data.csv

A CSV file is like a table. It has the following structure in which the first line has the field names and the rest of the lines have the data:

> id,first_name,last_name,email,gender,ip_address,ssn,credit_card,bitcoin,street_address
> 1,Ario,Noteyoung,anoteyoung0@nhs.uk,Male,99.5.160.227,509-86-9654,5602256742685208,179BsXQkUuC6NKYNsQkdmKQKbMBPmJtEHB,0227 Kropf Court
> 2,Minni,Endon,mendon1@netvibes.com,Female,213.62.229.103,765-11-9543,67613037902735554,135wbMcR98R6hqqWgEJXHZHcanQKGRPwE1,90 Sutteridge Way
> ...


Your assignment is:
-  to write a node script that will convert the customer-data.csv file into a JSON file.
- The 1st row of the CSV file acts as the keys/properties of the JSON object and the rest of the fields act as values. 
- The JSON file must have an array with 1000 items. 
- Output the JSON file in the same directory and name the file **customer-data.json**.

## Submission Instructions
To submit the assignment for feedback, put all the program files into GitHub and post a link to your code repository in the Assignment 1 Submissions section of the forums.

In addition to providing the GitHub link, please also answer the following questions about your project:

1. Walk us through the design of your project. Why did you design your project the way you did? What difficulties did you overcome?


Since this is my very first node.js "work", I decided to use as much as possible  modules. I initially used the csvtojson module for parsing from a file.

Then to output the json to a file I decided to use the    jsonfile module 4.0.0.

Regarding the problems I faced: The initial problem was to understand properly how does the json event works. I outputted the data, but then I realised that the json refers to only one record out of the array. As a result, I decided to create an empty list and push on it the json entries.

Then when the solution ended I pushed the json entries to the  jsonfile for writing to the fs. 
Initially the output was not indented, but then I used the options to add indent spaces the end of line character.

2. How did you test your project to verify that it works? 

I run the project and found out that the format is the same. I thought about using mocha and chai, for tests, but since this was an IO operation I decided against it. 

3. Let us know if anything doesn't work as intended so your reviewer will know ahead of time

I diffed the solution and my file and (in the final version) the only difference in the output file is a new line at the very end of the json file. However, since for parsing this will not affect the program I decided to ont pursue it further.