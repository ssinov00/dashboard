import React from "react";
import Styles from "./text.module.scss";

const Text = () => {

	return (
        <section className={Styles.instructions}>
            <p>1.) Create a dashboard web application. The application should display the sample data using different visual elements (like charts and tables). The dashboard show be composed of multiple rows with cells where the charts and table would appear.</p>
            The application should:
            <ul>
                <li>Add/remove rows dynamically on the dashboard</li>
                <li>Add/remove elements dynamically</li>
                <li>These elements (charts and tables) can come from a pre-defined list (there is no need to have a lot of different types of these elements, just enough to place a few side by side, even if it means repeating them)</li>
            </ul>
        </section>
	);
};

export default Text;
