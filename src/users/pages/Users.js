import React from "react";

import UsersList from "../components/UsersList";


const Users = () => {
    const users = [
        {
            id: "1",
            name: "SynSun",
            image: "https://i1.sndcdn.com/artworks-000028867988-m8690e-t500x500.jpg",
            places: "3"
        },
        {
            id: "2",
            name: "Simon",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR2pvn38vrZ9TUE1Kea5ZxI9pp3BM4HD3eXWdzYptPM_fpYkhvl",
            places: "5"
        }
    ];

    return <UsersList items={users}/>;
};


export default Users;
