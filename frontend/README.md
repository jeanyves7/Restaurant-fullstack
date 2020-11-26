#Frontend

All the photos that are used in the application are found in the public/Gallery folder

## actions

All the actions that are used in the application are found in a single folder component, we have 18 actions all of them are essential for the good functioning and  good rendering of the components.

The reason we have a huge number of actions is simple, we don't want to use the value of the state just before the rendering.

##api calls

All api calls are done using axios 
In this applicaton we used two kind of calls, we have the get method and the post method.

##Reducers 

We have 3 categories of reducers:
-RestaurantReducer contain the value of states that are related to the Restaurants components.

-VisitedReducer contain the value of states that are related to the Visited Restaurants log.

-GeneralSearchReducer contain the value of the states related for the general search, for example we have the Type of the search restaurants and we have the total number of pages.

-CombineReducers is responsible to combine all the reducers so we will be able to use them in the store.

##Saga Calls

we have 3 types of watchers:
-LoadingRestoWatcher related to get the restaurants and store it.
-LoadingVRestoWatcher related to get the visited Restaurants log and store it.
-SaveVRestoWatcher related to post a restaurant to the dataBase.


All the watchers are running in the rootSaga component that is running in the store.


