const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const room = require("../models/room");

async function main() {
    var mongoURL =
        "mongodb+srv://nassim001:nassim12345@cluster0.7jgmzos.mongodb.net/test";
    await mongoose.connect(mongoURL);
    console.log("mongo DB connection successful");
}
router.get("/getallrooms", async (req, res) => {
    try {
        //  const rooms = await room.find()
        const rooms = [
            {
                _id: {
                    $oid: "64569a22291d09b3d923f1e6",
                },
                name: "Oyo Flagship 75243 Metro International",
                imageurls: [
                    "https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                    "https://images.pexels.com/photos/2467285/pexels-photo-2467285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                ],
                rentperday: 2000,
                type: "Delux",
                maxcount: 3,
                phonenummber: "9989649278",
                currentbookings: [],
                description:
                    "Hotel Oyo Flagship 75243 is a furnished and modest property located in Regim",
            },
            {
                _id: {
                    $oid: "64569a22291d09b3d923f1e8",
                },
                name: "Hotel Bel Azur Thalasso & Bungalows",
                imageurls: [
                    "https://cf.bstatic.com/xdata/images/hotel/max1280x900/307809053.jpg?k=0e10edb52f5b33d569bac093e1436b229c3fa430c46917f234236091d0850b5b&o=&hp=1",
                    "https://cf.bstatic.com/xdata/images/hotel/max1280x900/160103020.jpg?k=7a355adc1dda8e5dc694761faf782f7e7786b6ca70b05332f7c5e8b5c63eaddf&o=&hp=1",
                    "https://cf.bstatic.com/xdata/images/hotel/max1280x900/375181225.jpg?k=b05bacbffa9768e6bb5c2d5df6f314bc18fd85caa39f297d81040855abd0f763&o=&hp=1",
                ],
                rentperday: 1200,
                type: "Delux",
                maxcount: 3,
                phonenummber: "2162345678",
                currentbookings: [],
                description:
                    "Hotel Bel Azur Thalasso & Bungalows is popular with guests booking family stays. Very friendly and nice staff. Good views and delicious food.",
            },
            {
                _id: {
                    $oid: "64569a22291d09b3d923f1e7",
                },
                name: "Oyo Flagship 789904",
                imageurls: [
                    "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1600",
                    "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                ],
                rentperday: 800,
                type: "Non-Delux",
                maxcount: 3,
                phonenummber: "9989649278",
                currentbookings: [],
                description:
                    "Hotel Oyo Flagship 789904 is a furnished and modest property located in Regim",
            },
            {
                _id: {
                    $oid: "64569a22291d09b3d923f1e5",
                },
                name: "Spot On Hotel Shiva Sai Lodge Near Regimental Bazaar, Sivaji Nagar, Hyder",
                imageurls: [
                    "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1600",
                    "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                ],
                rentperday: 1500,
                type: "Delux",
                maxcount: 3,
                phonenummber: "9989649278",
                currentbookings: [],
                description:
                    "Hotel Shiva Sai Lodge is a furnished and modest property located in Regim",
            },
            {
                _id: {
                    $oid: "64569a22291d09b3d923f1e9",
                },
                name: "Le Sultan",
                imageurls: [
                    "https://cf.bstatic.com/xdata/images/hotel/max1280x900/36190698.jpg?k=ef777dff39236f9e44b63d5c84eb0da3f04732f0d005d8d7509a87b5e0e33516&o=&hp=1",
                    "https://cf.bstatic.com/xdata/images/hotel/max1280x900/36190576.jpg?k=c714283a21d004bcc37867cc24852e8ade2cf932d893ad1a933cdf2293d60a82&o=&hp=1",
                    "https://cf.bstatic.com/xdata/images/hotel/max1280x900/297651462.jpg?k=fc60f7bfe960cb96a85146ab845e3545cf699de0f69add8e124bfc0738034b97&o=&hp=1",
                    "https://cf.bstatic.com/xdata/images/hotel/max1280x900/297643194.jpg?k=d3165605bb9c4526a73098d2abdfc587c12ec0e28c523c3b4e6b7ae416673cda&o=&hp=1",
                ],
                rentperday: 1800,
                type: "Delux",
                maxcount: 5,
                phonenummber: "2165555678",
                currentbookings: [],
                description:
                    "Hotel Le Sultan is popular with guests booking family stays. Very friendly and nice staff. Good views and delicious food.",
            },
        ];
        console.log("logging rooms", rooms);
        return res.json(rooms);
    } catch (error) {
        return res.status(404).json({ message: error });
    }
});
module.exports = router;
