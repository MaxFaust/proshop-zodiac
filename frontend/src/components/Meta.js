import React from "react"
import { Helmet } from "react-helmet"

const Meta = ({ title, description, keywords }) => {
	return (
		<Helmet>
			<title>{title}</title>
			<meta name='description' content={description} />
			<meta name='keyword' content={keywords} />
		</Helmet>
	)
}

Meta.defaultProps = {
	title: "Welcome To Lettus",
	description: "Support local purveyors",
	keywords: "CSA, farm, farmers market, community, supported, agriculture",
}

export default Meta
