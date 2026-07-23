// const sidebar = document.querySelector(".sidebar");


// sidebar.appendChild(testItem);

const myLibrary = [];

function Book(title, author, description, pages, isRead) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.description = description;
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLibrary(title, author, description, pages, isRead) {
    myLibrary.push(new Book(title, author, description, pages, isRead));
}

addBookToLibrary("Harry Potter and the Philosopher's Stone", "J.K. Rowling", "Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive. Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated by his grisly aunt and uncle. Then, on Harry's eleventh birthday, a great beetle-eyed giant of a man called Rubeus Hagrid bursts in with some astonishing news: Harry Potter is a wizard, and he has a place at Hogwarts School of Witchcraft and Wizardry. An incredible adventure is about to begin!", 223, true);
addBookToLibrary("Harry Potter and the Chamber of Secrets", "J.K. Rowling", "Harry Potter's summer has included the worst birthday ever, doomy warnings from a house-elf called Dobby, and rescue from the Dursleys by his friend Ron Weasley in a magical flying car! Back at Hogwarts School of Witchcraft And Wizardry for his second year, Harry hears strange whispers echo through empty corridors – and then the attacks start. Students are found as though turned to stone … Dobby's sinister predictions seem to be coming true.", 251, false);
addBookToLibrary("Harry Potter and the Prisoner of Azkaban", "J.K. Rowling", "When the Knight Bus crashes through the darkness and screeches to a halt in front of him, it's the start of another far from ordinary year at Hogwarts for Harry Potter. Sirius Black, escaped mass-murderer and follower of Lord Voldemort, is on the run – and they say he is coming after Harry. In his first ever Divination class, Professor Trelawney sees an omen of death in Harry's tea leaves... But perhaps most terrifying of all are the Dementors patrolling the school grounds, with their soul-sucking kiss.", 317, false);
addBookToLibrary("The Catcher in the Rye", "J.D. Salinger", "The Catcher in the Rye is a novel by American author J.D. Salinger published in 1951. The novel details two days in the life of 16-year-old Holden Caulfield after he has been expelled from prep school. Confused and disillusioned, Holden searches for truth and rails against the “phoniness” of the adult world. He ends up exhausted and emotionally unstable. The events are related by Holden after the fact in vivid, humorous language, with a great deal of teenage slang. A self-admitted “terrific liar,” Holden is both the quintessential unreliable narrator and a portrait of youthful alienation and grief.", 234, true);
addBookToLibrary("The Outsiders", "S.E. Hinton", "The Outsiders is a coming-of-age novel by S. E. Hinton published in 1967 by Viking Press. The novel is set in Tulsa, Oklahoma in the 1960s — although this is never explicitly stated in the book — and details the conflict between two rival gangs of White Americans divided by their socioeconomic status: the working-class \"greasers\" and the upper-middle-class \"Socs\" (short for Socials). The story is told in first-person perspective by teenage protagonist Ponyboy Curtis.", 192, true);