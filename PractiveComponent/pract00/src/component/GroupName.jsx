function GroupName(){
    const memebers = [
        "Hana Abiyu",
        "Natnael abera mogese",
        "Amanuel Bogale Gebregiorgis",
        "Salim aragaw addis",
        "Segni Woldemichael",
        "Kalkidan Agonafir Mulugeta",
        "Michael Addis Aniley",
        "Yoseph Gizachew"
    ]
    return (
        <>
        <h2>Group Members</h2>
        <ul>
        {memebers.map((name) => (
            <li>{name}</li>
        ))}
        </ul>
        

        </>

    );
}
export default GroupName;