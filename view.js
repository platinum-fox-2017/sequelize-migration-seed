class View {
    static show_data(data){
        console.log(data);
    }

    static show_error(err){
        console.log(`[ERROR] ${err}`);
    }
}

module.exports = View;
