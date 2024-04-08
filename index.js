function writeCards(x)

    {
    let newname = [...x]
    let message = [new Array(newname.length)]

    for (let i = 0; i < newname.length; i++ )
    {
        message[i] = `Thank you, ${newname[i]}, for the wonderful surprise gift!`;
    }
     return message
}


function countDown (x) {
for (let i = x; i >= 0; i--)
{
    console.log(i)
    }
}
