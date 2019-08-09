class Machine extends React.Component {
    render() {
        let num = this.props.num;
        let s1 = this.props.s1;
        let s2 = this.props.s2;
        let s3 = this.props.s3;

        let msg="You Loose!";
        let result="loser";

        if ((s1===s2)&&(s2===s3)) {
            msg="You Win!"
            result="winner";
        }

        const colors = { fontSize: '50px', backgroundColor: 'purple'};

        return (
            <div className="Machine">
                <h1> Slot Machine {num} </h1>
                <p style={colors}> {s1} {s2} {s3} </p>
                <h1 className={result}> {msg} </h1>
            </div>
        )
    }
}