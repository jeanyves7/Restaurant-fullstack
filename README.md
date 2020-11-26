# Restaurant-fullstack
This work is presented by jean yves Youssef

##Frontend
In the frontend all the components related to the design are found in the Component folder

###Component folder 
In this folder the components are divided into categories:

In the Header folder we will find the components related to the Navigation Bar and The general search Bar area

In the RestoComponent folder we will find the components related to the display of the homePage and visited Restaurant log.

### General information
 
we are using redux to store the search result.
we are using redux-sagas to make the api call

All the search result are paginated and the pagination is done dynamically

The user can choose the size per page, he has options between 2,4,6,8 restaurants per page

###For more info on the frontend please check the frontend readme file.

##BackEnd

Backend is writen in java springBoot

It offers a variety of services for the frontend.

All the data that need to be inserted at the begining are found in the data.sql file
The schema of the database is founf in the schema.sql file

### Please note in order to be able to access the database please change the parameters of the database path in the properties file in resources and don't forget to change the name and password that works for you.

We are using PagingAndSorting repository in order to give the frontend application a paginated result

We are accessing the paginated result via a querry: "/?page=x&size=y" x and y are values that given from the frontend
