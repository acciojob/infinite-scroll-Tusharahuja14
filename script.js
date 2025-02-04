//your code here!
let list=document.getElementById('infi-list');
function addelements()
{
	for(let i=0;i<2;i++)
		{
			const listitem=document.createElement('li');
			listitem.textContent=`Item ${list.children.length+1}`;
			list.appendChild(listitem);
}
}
for(let i=0;i<10;i++)
				{
				addelements();	
				}
function checkscroll()
{
	if(window.innerHeight+window.scrollY>=document.body.scrollHeight)
	{
		addelements();
	}
}
window.addEventListener("scroll",checkscroll);
