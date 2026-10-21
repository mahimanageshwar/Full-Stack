const H = document.createElement("h2");

const p = document.createElement("p");

const B = document.createElement("button");

H.classList.add("text-info");
H.textContent = "Sub Heading";

p.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum iusto sequi labore facilis incidunt impedit, aliquid nihil odit ipsa qui voluptate dolore fugiat et deserunt laudantium vel doloribus tenetur nostrum, ratione laborum officiis temporibus. Quasi facere, ea reprehenderit debitis ipsa saepe. Dolor odit ullam, cum impedit explicabo dignissimos quidem  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum iusto sequi labore facilis incidunt impedit, aliquid nihil odit ipsa qui voluptate dolore fugiat et deserunt laudantium vel doloribus tenetur nostrum, ratione laborum officiis temporibus. Quasi facere, ea reprehenderit debitis ipsa saepe. Dolor odit ullam, cum impedit explicabo dignissimos quidem eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum iusto sequi labore facilis incidunt impedit, aliquid nihil odit ipsa qui voluptate dolore fugiat et deserunt laudantium vel doloribus tenetur nostrum, ratione laborum officiis temporibus. Quasi facere, ea reprehenderit debitis ipsa saepe. Dolor odit ullam, cum impedit explicabo dignissimos quidem eius."


const ar = [
    "Sourabh", 
    "Rupesh", 
    "Krishana",
    "Pushkar",
    "Muskan_G",
    "Milki",
    "Priya",
    "Muskan_K"
]

const list = document.createElement("ol");

ar.forEach((item) => {
    const l = document.createElement("li");
    l.textContent = item;
    list.appendChild(l);
});

document.getElementById("myList").appendChild(list);