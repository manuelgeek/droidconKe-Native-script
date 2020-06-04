export function onScroll () {
    //access to the native event
    const scrollView = this.$refs.scrollView.nativeView;
    const topView = this.$refs.topView.nativeView;

    // if the offset is less than the height of the header.
    if (scrollView.verticalOffset < 250) {
        const offset = scrollView.verticalOffset / 1.65; // you can adjust this number to make the parallax more subtle or dramatic
        if (scrollView.ios) {
            // iOS adjust the position with an animation to create a smother scrolling effect.
            topView.animate({ translate: { x: 0, y: offset } }).then(() => { }, () => { });
        } else {
            // Android, animations are jerky so instead just adjust the position without animation.
            topView.translateY = Math.floor(offset);
        }
    }
}
import moment from 'moment'

export function humanReadable(value) {
    return moment(value).format('MMM Do YY')
}

export function timeAm(value) {
    return moment(value).format('a')
}
export function timeDay(value) {
    return moment(value).format('DD')
}
export function time(value) {
    return moment(value).format('h:mm')
}

export function hour(value) {
    return moment(value).format('h:mm a')
}

export function truncateString(str, num) {
    if (str.length <= num) {
        return str
    }
    return str.slice(0, num) + '...'
}


