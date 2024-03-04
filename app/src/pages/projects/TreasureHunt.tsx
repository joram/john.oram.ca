import React, {useState} from "react";
import BasePage from "../BasePage";
import {Button, Input, Modal} from "semantic-ui-react";


function TreasureHunt() {
    const [open, setOpen] = useState(false)
    const [answerRequested, setAnswerRequested] = useState(-1)

    const answers = {
        0: "This is handed to mummy by Arthur at the start of the treasure hunt",
        1: "This is john.oram.ca, "
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
            <p>Click below for the form<br/>Lets home it's use is not the norm</p>
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
                <Input type={"number"} onChange={(e)=> setAnswerRequested(parseInt(e.target.value))}/>


            </Modal.Content>
            <Modal.Actions>
                <Button color='black' onClick={() => setOpen(false)}>
                    close
                </Button>
            </Modal.Actions>
        </Modal>

    </BasePage>)
}

export default TreasureHunt