import axios from "../axios/axios";

class SendMessage{
    constructor(message, group) {
        this.groups = {my_web_errors: -1001755786077, people_talk: -708059003};
        this.bots = {
            my_web_errors: '5274529590:AAGSDTirzUQAgIH2Sp-SdkS3tqlXsHeGKqA',
            people_talk: '5236676264:AAEQ3Vlezksopb0jLNQg6nM02XBNxUbJXS8'};
        this.group = group;
        this.bot = this.bots[group];
        this.message = encodeURIComponent(`${message}`);
        this.sendMessage();
    }
    generate_url(group){
        return `https://api.telegram.org/bot${this.bot}/sendMessage?chat_id=${group}&parse_mode=html&text=${this.message}`;
    }

    sendMessage(){
        let group = this.groups[this.group];
        // console.log(this.generate_url(group));
        axios.get(this.generate_url(group));
    };
}
export default SendMessage;
