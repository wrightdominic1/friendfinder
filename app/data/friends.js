// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendsArray = [
    {
        "name": "Rex",
        "photo": "https://static.scientificamerican.com/sciam/cache/file/D059BC4A-CCF3-4495-849ABBAFAED10456_source.jpg?w=590&h=800&526ED1E1-34FF-4472-B348B8B4769AB2A1",
        "scores": [
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1
        ]
    },
    {
        "name": "Darla",
        "photo": "https://s.yimg.com/uu/api/res/1.2/NQlj_EpZ4orFj1wjHxmtcQ--~B/aD00NzA7dz01NDg7c209MTthcHBpZD15dGFjaHlvbg--/http://media.zenfs.com/en-US/homerun/the_loop_130/5d19f90e7e1778c0c688892e654e6075",
        "scores": [
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2
        ]
    },
    {
        "name": "Lula",
        "photo": "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12193133/German-Shepherd-Puppy-Fetch.jpg",
        "scores": [
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3
        ]
    },
    {
        "name": "Chewey",
        "photo": "https://s.abcnews.com/images/Lifestyle/puppy-ht-3-er-170907_16x9_992.jpg",
        "scores": [
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4
        ]
    },
    {
        "name": "David",
        "photo": "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2018/05/22224952/beagle-puppy-in-large-cushion-chair.jpg",
        "scores": [
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5
        ]
    }
    
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;
