import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function MuiAccordion() {
    return (
        <div>
            <Accordion>
                <AccordionSummary id="panel1-header" expandIcon={<ExpandMoreIcon />}><h1>Test</h1></AccordionSummary>
                <AccordionDetails>
                    <p>Lorem Ipsum</p>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary id="panel2-header" expandIcon={<ExpandMoreIcon />}><h1>Test</h1></AccordionSummary>
                <AccordionDetails>
                    <p>Lorem Ipsum</p>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary id="panel3-header" expandIcon={<ExpandMoreIcon />}><h1>Test</h1></AccordionSummary>
                <AccordionDetails>
                    <p>Lorem Ipsum</p>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}