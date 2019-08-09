class App extends React.Component {
    render() {
        return (
            <div>
                <Machine num={1} s1="X" s2="Y" s3="Z" />
                <Machine num={2} s1="X" s2="X" s3="Z" />
                <Machine num={3} s1="X" s2="X" s3="X" />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));