import React, {useState} from "react";
import BasePage from "../BasePage";
import {Button, ButtonGroup, Form, Input, Modal} from "semantic-ui-react";


function TreasureHunt() {
    const [open, setOpen] = useState(false)
    const [answerRequested, setAnswerRequested] = useState(-1)
    const [answer, setAnswer] = useState("")
    const [hint, setHint] = useState("")

    const answers: any = {
        0: {
            hint: "Arthur gave this to you",
            location: "Embark on a journey through our memories dear,\n" +
                "With each clue, let nostalgia draw you near.\n" +
                "In this treasure hunt, a special prize awaits,\n" +
                "A collection of yarn that you'll think is great.\n" +
                "\n" +
                "Each location holds a story untold,\n" +
                "A review of passions, both new and old.\n" +
                "So let's begin, with love as our guide,\n" +
                "To rediscover what we hold inside.\n" +
                "\n" +
                "Our interests, our dreams, woven in each rhyme,\n" +
                "As we journey through space and time.\n" +
                "So follow the clues, as we reminisce,\n" +
                "And at the end, find the yarn of bliss.\n" +
                "\n" +
                "(this was written by chatgpt)"
        },
        1: {
            hint: "on a page on any device\n" +
                "it has tabs, that dad thinks is nice.\n" +
                "at this url you can find his projects and work\n" +
                "of the things that daddy thinks are of worth\n" +
                "on the sidebar you will see\n" +
                "a link to the next clue for thee",
            location: "https://john.oram.ca"
        },
        2: {
            hint: "in something that keeps stuff cold\n" +
                "is where the next clue has been told\n" +
                "it's where daddy keeps his beer\n" +
                "and where the next clue is near\n",
            location: "Daddy's beer in the downstairs fridge"
        },
        3: {
            hint: "To start his day, daddy needs a cup,\n" +
                "A warm brew to wake him up.\n" +
                "With the beans it is hidden near,\n" +
                "The next clue is waiting here.",
            location: "Coffee cupboard"
        },
        4: {
            hint: "a wood machine that daddy controls\n" +
                "with this machine he makes his goals\n" +
                "it's something that he likes to use\n" +
                "hopefully it does not blow a fuse\n",
            location: "CNC machine",
        },
        5: {
            hint: "Daddy likes to teach arthur to play chess\n" +
                "This hiding place is the best\n" +
                "It's where the pieces are kept\n" +
                "and where the next clue has been left\n",
            location: "Chess set"
        },
        6: {
            hint: "it's something that's made of wood\n" +
                "that swims underwater if it could\n" +
                "ruby did not want it in her room\n" +
                "so it's on the landing, not in an ocean bloom\n",
            location: "On the backside of the wooden octopus"
        },
        7: {
            hint: "This spice we love, it's in our bed\n" +
                "it's also on the fume hood overhead\n" +
                "these magnetic containers which we adore\n" +
                "you picked up at the hardware store?\n",
            location: "Magnetic spice container with garlic in it"
        },
        8: {
            hint: "Lactose is not our friend,\n" +
                "but we love cheese to no end.\n" +
                "We've made our own, here it rests until we eat,\n" +
                "in a cool try place rests our treat",
            location: "Cheese in the cheese cave (workshop peg board, by the charging stuff)"
        },
        9: {
            hint: "you can find these in a box\n" +
                "carrying them with intent? don't get caught\n" +
                "it's something I like to teach\n" +
                "and it's something that's within your reach\n" +
                "forgot your keys? don't you worry\n" +
                "Jonathan can use them in a hurry",
            location: "Lock pick set"
        },
        10: {
            hint: "Ruby likes these and so do we,\n" +
                "Daddy keeps a box of these. \n" +
                "They stick to walls and faces too\n" +
                "Find the next clue where dad's tech stickers are kept like new.",
            location: "Daddy's tech stickers, on the stairs going upstairs",
        },
        11: {
            hint: "This spice we love, it's in our bed\n" +
                "it's grown each year, and it's not dead\n" +
                "we saw it poking through the ground\n" +
                "and that's where the next clue can be found",
            location: "Garlic Bend, in the corner by the steps, tucked under the cardboard"
        },
        12: {
            hint: "Daddy juice is a name\n" +
                "for this drink made of grain\n" +
                "He considers it a vice\n" +
                "but as a shared interest with opa, it is nice",
            location: "Daddy's whiskey",
        },
        13: {
            hint: "it's something that is downstairs that we have upstairs too\n" +
                "it keeps knives and forks and spoons for you",
            location: "Silverware drawer (downstairs kitchen)",
        },
        14: {
            hint: "this was our first adult furniture\n" +
                "it's where we eat and where we nurture\n" +
                "you and I could play footsy\n" +
                "where you should take a looksy",
            location: "Taped to the underside of the dining room table",
        },
        15: {
            hint: "This was something that used to do\n" +
                "he'd grind up apples and make a brew\n" +
                "It's something that has been put on hold\n" +
                "To freds door it's sometimes rolled",
            location: "Alcohol rack downstairs, by the basement door",
        },
        16: {
            hint: "It's something that daddy likes to smoke\n" +
                "It's something that he likes to toke\n" +
                "he usually hides it from his kids\n" +
                "and put's it in a jar with a lid\n" +
                "This jar is on the window sill\n" +
                "and it has a little grinding mill",
            location: "Daddy's weed, on the window, in the brass grinder",
        },
        17: {
            hint: "here daddy stores his food\n" +
                "in a bag he's never pooed\n" +
                "both of these are in a drawer\n" +
                "it's the closest to the floor\n" +
                "powdered milk there is not,\n" +
                "I did check, or so I thought",
            location: "Outdoor Food Drawer in the basement",
        },
        18: {
            hint: "it is blue\n" +
                "and see through\n" +
                "This holds stickers of all kinds\n" +
                "It is where the next hint you will find\n" +
                "we likely moved it to arthur's room\n" +
                "for these stickers ruby swoons",
            location: "Blue sticker box, in Arthur's room",
        },
        19: {
            hint: "Something that helps mum make her dice\n" +
                "It keeps the bubbles small and nice\n" +
                "Under the chamber you will see\n" +
                "The next clue is waiting for thee",
            location: "taped to the bottom of the pressure pot",
        },
        20: {
            hint: "clicking blocks and building towers\n" +
                "this is where the kids spend their hours\n" +
                "In the table where the bricks are stored\n" +
                "The next clue is where the kids are never bored",
            location: "Lego table, inside the bins",
        },
        21: {
            hint: "Ding goes the bell when danger is near\n" +
                "The villagers run and hide in fear\n" +
                "But in the new village, by the bell is a sign\n" +
                "Other than creepers you're doing fine",
            location: "Minecraft bell/well (arthur can show you)",
        },
        22: {
            hint: "Often neglected, but never forgotten,\n" +
                "This board is where fingers are strengthened.\n" +
                "on top of a door, it's where it's hung,\n" +
                "to fetch this clue, a pull-up is done.",
            location: "climbing finger board",
        },
        23: {
            hint: "click clack goes your fingers on the keys\n" +
                "it's where you game with mimi\n" +
                "You may not notice the keyboards wobbly\n" +
                "but it's where the next clue is probably",
            location: "under mummy's keyboard",
        },
        24: {
            hint: "ruby loves that stuff that's on the shelf\n" +
                "it's sticky and ruby plays by her self\n" +
                "Arthur does not like it, it's not his style\n" +
                "but it's on the shelf, and it's worth the while\n",
            location: "Ruby's slime, on the shelf in the kitchen",
        },
        25: {
            hint: "It's under where arthur's mouse sits\n" +
                "It's where he clicks and plays and sits\n" +
                "It's where the next clue has been hid\n" +
                "and you are going to un hide it\n",
            location: "Under Arthur's mouse pad",
        },
        26: {
            hint: "the way arthur lost his tooth and got some money,\n" +
                "His tooth did not end up in his tummy. (I think that's funny)\n" +
                "we made a smaller box that's hollow\n" +
                "that we want to send to oslo",
            location: "Arthur's tooth box",
        },
        27: {
            hint: "It's something that holds electric stuff\n" +
                "I made in a bit of a rush\n" +
                "you mocked it out for me to carve\n" +
                "I made a mistake, but it's not that large\n",
            location: "the charging station for tablets and phones"
        },
        28: {
            hint: "Arthur Weaves a scarf of many colours,\n" +
                "this tool helps him like no other.\n" +
                "Rainbow colours and a wooden frame,\n" +
                "The next clue is where Arthur's loom remains.",
            location: "Arthur's loom",
        },
        29: {
            hint: "It's something that we use to make\n" +
                "the water hot, for our sake\n" +
                "It's where the next clue is hid\n" +
                "and you are going to un hide it\n",
            location: "Hot water tank",
        },
        30: {
            hint: "Round and round it goes, ever quicker\n" +
                "in the kitchen it can beat things thicker\n" +
                "moved out of the way when the kids want to hide\n" +
                "a lower cupboard it is inside",
            location: "Kitchenaid mixer",
        },
        31: {
            hint: "Here on the wall we keep our art,\n" +
                "A picture of love, a work of heart,\n" +
                "Behind the glass, art is found,\n" +
                "behind that your search is bound",
            location: "Behind the kid artwork inside the picture frame (left art with hearts)",
        },
        32: {
            hint: "In a box, they are kept\n" +
                "you threw most out and we wept\n" +
                "Arthur learnt this game right quick\n" +
                "this will make him a MtG addict",
            location: "Magic the Gathering cards",
        },
        33: {
            hint: "While I'm gone you should have some fun\n" +
                "This one's for you, our daughter and our son\n" +
                "To complete this task you're dance card is packed\n" +
                "I've talked with friends, they've got your back\n" +
                "They hold your hints, but they have a request\n" +
                "To get your clue, you must dance your best\n" +
                "Here's a list of people involved\n" +
                "if they record, it was not my call\n" +
                "They may request a particular dance\n" +
                "So be prepared, and take a chance\n",
            location: "They should each give you a single letter, spelling out WILLOWTREE, so in the tree outside",
        34: {
            hint: "I rest my feet here, in the place where I work away\n" +
                "Tucked under the desk in a bag of gray\n" +
                "As our tale winds to an end,\n" +
                "I hope you were not driven around the bend\n" +
                "much toil and trouble i put you through\n" +
                "but now you have more wool from a yew",
            location: "Under John's desk in the grey bag (unless I forgot to move it there," +
                "in which case it's in the gear closet in the guest room)"
            }
        }

    };

    return (<BasePage title="Treasure Hunt">
        While on a mountaineering trip, I left behind a treasure hunt for my kids and wife to be entertained.
        Each hint attempts to rhyme, and thi page is the first place they will find, since then we can have a "I am
        stuck" answer sheet, since I won't be there to give extra clues.

        <br/>
        <br/>
        <hr/>
        <code>
            <p>for Location number two,<br/>this rhyme will have to do</p>
            <p>Mapping out the way to go,<br/>behind the toilet you should go</p>
            <p>From black walnut this art was made,<br/>From the fumes it may one day fade</p>
            <p>If you need the answer to any clue<br/>There is a modal just for you</p>
            <p>Click below for the form<br/>Lets hope it's use is not the norm</p>
        </code>
        <hr/>

        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<Button>Show Modal</Button>}
        >
            <Modal.Header>Treasure Hunt Answers</Modal.Header>
            <Modal.Content>
                <Form>
                <Input type="number" onChange={(e)=> setAnswerRequested(parseInt(e.target.value))}/>
                <br/>

                 <ButtonGroup>
                    <Button type="button" onClick={()=> {
                        const shownAnswer = answers[answerRequested].location;
                        console.log(shownAnswer)
                        setAnswer(shownAnswer)
                    }}>
                        Show Answer
                    </Button>

                    <Button type="button" onClick={()=> {
                        const shownHint = answers[answerRequested].hint;
                        console.log(shownHint)
                        setHint(shownHint)
                    }}>Show Hint</Button>
                 </ButtonGroup>
                <br/>
                {hint}
                <br/>
                {answer}
                </Form>
            </Modal.Content>
            <Modal.Actions>
                <Button color='black' onClick={() => {
                    setOpen(false)
                    setAnswer("")
                }} >
                    close
                </Button>
            </Modal.Actions>
        </Modal>

    </BasePage>)
}

export default TreasureHunt