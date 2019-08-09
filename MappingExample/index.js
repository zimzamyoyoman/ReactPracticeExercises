class App extends React.Component {
    render() {
        return (
            <div>
                <Friend 
                    name="Elton"
                    hobbies={['Piano','Signing','Dancing']}
                />
                <Friend 
                    name="Frigga"
                    hobbies={['Motivating Thor','Getting Loki Soup']}
                />                
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));