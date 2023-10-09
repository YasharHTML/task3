const db = [
    {
        id: 0,
        title: "A Fox in Chernihiv Zoo Gives Birth to a Cub",
        text: "A wonderful event has occurred at the Chernihiv Zoo! A fox named Red has given birth to a beautiful cub! So hurry up and visit to see this adorable creature!",
    },
    {
        id: 1,
        title: "New Exhibit Opening: Lions of Africa",
        text: "We are thrilled to announce the grand opening of our new exhibit, 'Lions of Africa.' Come and witness these majestic creatures in their natural habitat-inspired enclosure!",
    },
    {
        id: 2,
        title: "Zoo Annual Membership Sale",
        text: "Don't miss our annual membership sale! Get unlimited access to the zoo all year round at a discounted rate. It's a wild deal you won't want to miss!",
    },
    {
        id: 3,
        title: "Feeding Time with the Penguins",
        text: "Join us for a fun and educational experience at the penguin exhibit. Watch our adorable penguins being fed by our expert keepers and learn about their unique behaviors.",
    },
    {
        id: 4,
        title: "Tropical Bird Aviary Expansion",
        text: "We're excited to announce the expansion of our Tropical Bird Aviary! Explore a vibrant and diverse array of exotic birds from around the world in this newly expanded exhibit.",
    },
    {
        id: 5,
        title: "Sloth Encounter",
        text: "Have a slow and relaxing day at the zoo with our Sloth Encounter experience. Get up close and personal with these fascinating creatures and discover the secrets of their leisurely lifestyle.",
    },
    {
        id: 6,
        title: "Dolphin Show Spectacular",
        text: "Don't miss our daily Dolphin Show Spectacular! Watch these intelligent marine mammals perform incredible tricks and learn about their conservation.",
    },
    {
        id: 7,
        title: "Children's Zoo Birthday Parties",
        text: "Celebrate your child's birthday with a wild twist! Host a birthday party at our Children's Zoo area, complete with animal encounters and fun activities.",
    },
    {
        id: 8,
        title: "African Safari Night",
        text: "Experience the thrill of an African Safari Night at the zoo. Take a guided tour through the African savannah exhibit, where you can see lions, zebras, and more under the moonlit sky.",
    },
    {
        id: 9,
        title: "Spectacular Reptile Show",
        text: "Get ready to be amazed by our Spectacular Reptile Show! Watch as snakes, lizards, and other reptiles demonstrate their incredible abilities.",
    },
];

export function getNews(page: number, size: number) {
    return db.slice(page * size, page * size + size);
}
