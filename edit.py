import pandas as pd


def edit():
    #reading csv file 
    book_df_edited=pd.read_csv("book_geocoordinates.csv")

    title_list=book_df_edited["Title"].to_list()
    lat=book_df_edited["Lat"].to_list()
    lng=book_df_edited["Lng"].to_list()

    final_list=[]
    for i in range(0,len(title_list)):
        coordinates=[lng[i], lat[i]]
        first_dict={"Title":title_list[i], "Latitude":lat[i], "Longitude":lng[i], "Coordinates":coordinates}
        final_list.append(first_dict)

    return final_list
    

