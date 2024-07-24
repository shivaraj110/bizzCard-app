import { memo } from "react"

export const Bizz = memo(({props})=>{
    return (
        <div style={style.card}>
            <h1 style={style.name}>{props.name}</h1>
            <h2 style={style.description}>{props.description}</h2>
            <h3 style={style.interestsHeader}>Interesets</h3>
            <ul style={style.interestsList}>
                <li style={style.interestItem}>{props.interests['1']}</li>
                <li style={style.interestItem}>{props.interests['2']}</li>
                <li style={style.interestItem}>{props.interests['3']}</li>
                <li style={style.interestItem}>{props.interests['4']}</li>
            </ul>
            <div style={style.socialLinks}>
            <img src="./components/github.svg" alt="link to github" style={{ width:'1.75em', marginLeft: '35%' , marginTop:15, cursor:'pointer',} }/>
            <img src="./components/linked.svg" alt="link to x" style={{width:'1.35em', marginLeft: 10, marginTop:15, cursor:'pointer'}}/>
            <img src="./components/twitter-x.svg" alt="link to linkedIn" style={{width:'2em', marginLeft: 8, marginTop:15, cursor:'pointer'}}/>
            </div>
        </div>
    )
}
)
const style = {
    card: {
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '20px',
        margin: '20px',
        maxWidth: '400px',
        boxShadow: '0 2px 8px #242e2b',
        backgroundColor: '#bcd4cc'
      },
      name: {
        fontSize: '24px',
        marginBottom: '10px',
        color: '#333',
      },
      description: {
        fontSize: '16px',
        color: '#555',
        marginBottom: '15px',
      },
      socialLinks: {
        display: 'flex',
        marginBottom: '15px',
      },
      link: {
        textDecoration: 'none',
        padding: '10px 15px', // Padding for the button
        display: 'inline-block', // Display as inline-block to be side by side
        margin: '10px', // Margin between buttons
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Box shadow for a subtle lift
        curser: 'pointer'
      },
      interestsHeader: {
        fontSize: '18px',
        marginBottom: '10px',
        color: '#333',
      },
      interestsList: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
      },
      interestItem: {
        fontSize: '14px',
        marginBottom: '5px',
        color: '#555',
      },
}
