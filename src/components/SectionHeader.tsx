// reused section header
export interface SectionHeaderProps {
    eyebrow: string;
    title: string;
    text?: string; //optional
}

export function SectionHeader({ eyebrow, title, text }: SectionHeaderProps){
    return (
        <div className = "section-header">
            <p className = "eyebrow">{ eyebrow }</p>
            <h2>{ title }</h2>
            {/* 
            if the text exists
                True: display para
                False: display nothing
            */}
            {text && <p className='section-text'>{ text }</p>}
        </div>
    )
}
