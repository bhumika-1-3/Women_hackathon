import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions() {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography style={{ fontSize: "1.5rem",backgroundColor:"pink" }}>Should you use sanitary products that are more absorbent and change them less frequently?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography style={{ fontSize: "1.5rem", textAlign: "left" }}>
                        Always choose sanitary products with an absorbency level that's appropriate for your menstrual flow.
                        Changing these products less frequently than once in four to eight hours (four hours for pads and four to eight hours for tampons)
                        may lead to bacterial growth and infections.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                    <Typography style={{ fontSize: "1.5rem",backgroundColor:"#f7edf7" }}>Can you bathe while on your period?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography style={{ fontSize: "1.5rem", textAlign: "left" }}>
                        Yes, people who are menstruating can safely take baths. Normally, running water is perfectly fine. But if you have any
                        reproductive health problems, it's a good idea to consult a health care provider before soaking in the tub.
                        If you do choose to take a bath while on your period, follow these steps for the safest experience:

                        <br />1. Ensure the bathtub is clean, as your immune system is more susceptible to infection during menstruation.
                        <br />2. Use warm water — not hot. Hot water may provoke heavier bleeding.
                        <br />3. Wash your genitals before sitting in the tub (for example, rinse off under the shower).
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                    <Typography style={{ fontSize: "1.5rem",backgroundColor:"pink" }}>Can you prevent odors using a feminine hygiene deodorant?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography style={{ fontSize: "1.5rem", textAlign: "left" }}>
                        Feminine hygiene deodorants and sprays can trigger vaginitis (its symptoms include itching, redness, and abnormally heavy vaginal discharge).
                        Any contact between the vulva and the chemicals contained in any sanitary products, including feminine hygiene deodorants,
                        should be minimized. Instead, you can use wet wipes or rinse your genital area with water.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography style={{ fontSize: "1.5rem",backgroundColor:"#f7edf7" }}>What is the right pH level for intimate hygiene products?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography style={{ fontSize: "1.5rem", textAlign: "left" }}>
                        The vagina's pH is acidic due to the beneficial lactobacilli inhabiting it. They protect against infections and other pathogens.
                        Many experts recommend washing the genital area with running warm water without any soap, and some suggest using intimate hygiene
                        products with an acidic pH of 3.8 to 4.5 (which is also a healthy vaginal pH).
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                    <Typography style={{ fontSize: "1.5rem",backgroundColor:"pink" }}>If you use a pad for the night and sleep for about eight hours, should you get up every four hours to change it?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography style={{ fontSize: "1.5rem", textAlign: "left" }}>
                        When you’re active during the day, your menstrual flow is normally heavier, so the pad absorbs more blood, sweat,
                        and sebum. This creates a breeding ground for bacteria, which is why you shouldn’t wear one pad for more than four hours.
                        When you are asleep, your bodily functions slow down, and the bleeding intensity decreases,
                        so you can safely wear a pad overnight. However, don’t use tampons for more than eight hours.
                        They’re associated with a risk of toxic shock syndrome, a severe infection.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                    <Typography style={{ fontSize: "1.5rem",backgroundColor:"#f7edf7" }}>When disposing of a used sanitary product, should you wrap it first?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography style={{ fontSize: "1.5rem", textAlign: "left" }}>
                        Roll up a used pad, enclose it in the wrapper of the new one or in toilet paper, and then throw it away.
                        (For tampons, just wrapping them in toilet paper is enough.) This will minimize any smell and prevent the
                        spread of bacteria, which can build up over time.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}