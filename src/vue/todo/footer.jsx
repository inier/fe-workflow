import '@src/assets/styles/footer.styl';

export default {
    data() {
        return {
            author: 'ok',
        };
    },
    render() {
        return (
            <div id="footer" style={{ marginTop: '20px' }}>
                <span>Written by {this.author}</span>
            </div>
        );
    },
};
