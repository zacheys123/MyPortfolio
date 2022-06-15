import styled from 'styled-components';
import { media__queries as device } from '../css/media__queries';
export const Wrapper = styled.div`
	width: 100%;
	min-height: 100%;
	overflow: hidden;
`;
export const Bio = styled.div`
	background: lightgreen;
	width: 100%;
	min-height: 35rem;
	display: ${(props) => (props.loading ? 'none' : 'block')};
	z-index: 1;

	@media ${device.tablet} {
		display: none;
		background: black;
		display: ${(props) => (props.loading ? 'none' : 'block')};
		font-size: 1rem !important;
		& p {
			font-size: 0.7rem !important;
			color: white !important;
		}
	}
	@media ${device.mobileS} {
		font-size: 1rem !important;
		background: black;
		font-size: 1rem !important;
		& p {
			color: white !important;
			font-size: 0.7rem !important;
		}
	}
	@media ${device.mobileL} {
		font-size: 1rem !important;
		background: black;
		font-size: 1rem !important;
		& p {
			color: white !important;
			font-size: 0.7rem !important;
		}
	}
	@media ${device.mobileM} {
		font-size: 1rem !important;
		background: black;
		font-size: 1rem !important;
		& p {
			color: white !important;
			font-size: 0.7rem !important;
		}
	}
	@media ${device.laptop} {
		background: black;

		& p {
			color: white !important;
			font-size: 0.7rem !important;
		}
	}
`;
export const Education = styled.div`
	background: blue;
	width: 100%;
	min-height: 100%;
	transform: scale(0);
	display: none;

	@media ${device.tablet} {
		background: black;
		display: ${(props) => (props.loading ? 'none' : 'block')};
		font-size: 1rem !important;
		& p {
			font-size: 0.7rem !important;
			color: white !important;
		}
	}
`;
export const Projects = styled.div`
	background: green;
	width: 100%;
	min-height: 100%;
	transform: scale(0);
	display: none;

	@media ${device.tablet} {
		background: black;
		display: ${(props) => (props.loading ? 'none' : 'block')};
		font-size: 1rem !important;
		& p {
			font-size: 0.7rem !important;
			color: white !important;
		}
	}
`;
export const Videos = styled.div`
	background: purple;
	width: 100%;
	transform: scale(0);
	display: none;

	@media ${device.tablet} {
		background: black;
		display: ${(props) => (props.loading ? 'none' : 'block')};
		font-size: 1rem !important;
		& p {
			font-size: 0.7rem !important;
			color: white !important;
		}
	}
`;
export const Experience = styled.div`
	background: indigo;
	width: 100%;
	transform: scale(0);
	min-height: 35rem;
	display: none;

	@media ${device.tablet} {
		background: black;
		display: ${(props) => (props.loading ? 'none' : 'block')};
		font-size: 1rem !important;
		& p {
			font-size: 0.7rem !important;
			color: white !important;
		}
	}
`;
export const Interests = styled.div`
	transform: scale(0);
	width: 100%;
	padding: 1rem;

	display: none;

	@media ${device.tablet} {
		background: black;
		display: ${(props) => (props.loading ? 'none' : 'block')};
		font-size: 1rem !important;
		& p {
			font-size: 0.7rem !important;
			color: white !important;
		}
	}
`;
// each page styling
