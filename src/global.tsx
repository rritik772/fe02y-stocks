import { Global } from "@mantine/core";

const GlobalCss = () => {
    return (
        <Global
            styles={[
                {
                    ".display": {
                        fontFamily: "Rubik Mono One",
                        fontWeight: 400,
                        fontStyle: "normal",
                    },
                },
                {
                    ".monospace": {
                        fontFamily: "Fira Code",
                        fontWeight: 400,
                        fontStyle: "normal",
                    },
                },
                {
                    ".monospace-5": {
                        fontFamily: "Fira Code",
                        fontWeight: 500,
                        fontStyle: "normal",
                    },
                },
                {
                    ".sans": {
                        fontFamily: "Rubik",
                        fontWeight: 400,
                        fontStyle: "normal",
                    },
                },
                {
                    ".sans-5": {
                        fontFamily: "Rubik",
                        fontWeight: 500,
                        fontStyle: "normal",
                    },
                },
                {
                    ".sans-6": {
                        fontFamily: "Rubik",
                        fontWeight: 600,
                        fontStyle: "normal",
                    },
                },
            ]}
        />
    );
};

export default GlobalCss;
