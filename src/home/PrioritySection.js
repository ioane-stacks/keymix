import { defaultContent } from "../data/defaultContent.js";

function PrioritySection() {
	const { priority } = defaultContent.bodyInformation;

	return (
		<section className="priority">
			{priority.map((prior, i) => {
				const { priorityIcon, priorityDescription } = prior;
				return (
					<article key={i}>
						<span>{priorityIcon}</span> {priorityDescription}
					</article>
				);
			})}
		</section>
	);
}

export default PrioritySection;
