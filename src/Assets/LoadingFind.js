import { Oval } from "react-loader-spinner";

function LoadingFind({ height, width }) {
    return (
        <Oval
            ariaLabel="loading-indicator"
            height={height}
            width={width}
            strokeWidth={5}
            strokeWidthSecondary={5}
            color="grey"
            secondaryColor="white"
        />
    );
}

export default LoadingFind