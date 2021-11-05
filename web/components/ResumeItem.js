import formatDates from '../lib/formatDates'

export default function Component({ title, subtitle, secondary, startDate, endDate, description, bullets }) {
    return (<div className="p-4 pt-2 w-full">
        <h3 className="font-medium text-md inline">{title}</h3>{subtitle ? <p className="font-light text-md inline ml-2">{subtitle}</p> : null}
        {secondary ? <h3 className="text-md">{secondary}</h3> : null}
        <p className="font-light text-xs text-gray-500">{formatDates(startDate, endDate)}</p>
        {
            !bullets ? <p className="text-sm">{description}</p>
                : (
                    <ul className="list-disc ml-4">
                        {bullets.map((bullet, index) => <li className="text-sm text-gray-800 leading-5 my-1" key={index}>{bullet}</li>)}
                    </ul>
                )
        }
    </div>)
}