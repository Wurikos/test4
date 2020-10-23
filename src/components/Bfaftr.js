import React from 'react';
import BeforeAfterSlider from 'react-before-after-slider';
import atomize from "@quarkly/atomize";

const Bfaftr = props => {
	return <div {...props}>
		<BeforeAfterSlider before={props.before} after={props.after} width={window.innerWidth} height={480}></BeforeAfterSlider>
	</div>;
};

export default atomize(Bfaftr)({
	name: "Bfaftr",
	effects: {
		hover: ":hover"
	},
	normalize: true,
	mixins: true,
	description: {
		// past here description for your component
		en: "Bfaftr — my awesome component"
	},
	propInfo: {
		// past here props description for your component
		before: {
			control: "image"
		},
		after: {
			control: "image"
		},
		aspectRatio: {
			control: "text"
		}
	}
});