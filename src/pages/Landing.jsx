import { createTheme } from '@mui/material/styles';
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import FlightSelectPageOne from "../components/FlightSelectPageOne";
import FlightSelectPageTwo from "../components/FlightSelectPageTwo"
import FlightSelectPageThree from '../components/FlightSelectPageThree';

let theme = createTheme({
    palette: {
        primary: {
            main: '#6366f1',
        }
    },
});

theme = createTheme(theme, {
    palette: {
        info: {
            main: theme.palette.primary.main,
        },
    },
});

export default function Example(props) {

    let [currentPage, setCurrentPage] = React.useState(1);
    const [searchState, setSearchState] = React.useState({
        APFrom: "",
        APTo: "",
        DateFrom: "",
        DateTo: ""
    })
    console.log(searchState);
    return (
        <div>
            <AnimatePresence>
                {(currentPage === 1) && <FlightSelectPageOne
                    theme={theme}
                    setSearchState={setSearchState}
                    setCurrentPage={setCurrentPage}
                    key="fsp1" />}
            </AnimatePresence>
            <AnimatePresence>
                {(currentPage === 2) && <FlightSelectPageTwo
                    theme={theme}
                    setSearchState={setSearchState}
                    setCurrentPage={setCurrentPage}
                    key="fsp2" />}
            </AnimatePresence>
            <AnimatePresence>
                {(currentPage === 3) && <FlightSelectPageThree
                    theme={theme}
                    searchState={searchState}
                    key="fsp3" />}
            </AnimatePresence>
        </div>
    )
}
