/*This is a Next.js API route
To call this use http://localhost:3000/api/hello
the folder 'hello' defines the route
the file 'route.ts' defines the handler it must be called route.ts
*/
import axios, { all } from 'axios';
import { JSDOM } from 'jsdom';
import { start } from 'repl';
export async function GET() {

  return Response.json({ name: 'John Doeds (GET)' }, { status: 200 })

}

export async function POST(request: Request) {
  console.log("Starting...")
  //const htmlPage = '<html><body><h1>My First Heading</h1><p>My first paragraph.</p></body></html>'
  const url = 'https://www.google.com/travel/search?q=Arte%20Vida%20Tarifa';
  const userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36';
  const cookie = 'SOCS=CAESOAgMEitib3FfaWRlbnRpdHlmcm9udGVuZHVpc2VydmVyXzIwMjQwNzMwLjA1X3AwGgVlbi1VUyACGgYIgMOwtQY;';
  const htmlPage = await fetchHtml(url, userAgent, cookie);

  const dom = new JSDOM(htmlPage, { runScripts: "dangerously", pretendToBeVisual: true, resources: "usable", url: "https://www.google.com/",
  referrer: "https://www.google.com/",
  contentType: "text/html",});
  // Find h2 with text All options
  const tabs: NodeListOf<Element> = dom.window.document.querySelectorAll('div[jsname="CzCxxd"]')
  // Select the second element from the "Prices" tab
  
  const allOptions: NodeListOf<Element> = tabs[1].querySelectorAll('div[class="ADs2Tc"]')
  console.log("All Options: " + allOptions.length)

// Ota NAnme    
   allOptions.forEach(node => {
      const allSpans: NodeListOf<Element> = node.querySelectorAll('span[data-click-type="268"]')
      //console.log("All Spans: " + allSpans.length)
      const otaName = allSpans[0]?.textContent
      const allPriceSpans: NodeListOf<Element> = node.querySelectorAll('span[class="MW1oTb"]')

      console.log("OTA Name: " + otaName + ' - ' + allPriceSpans[0]?.textContent)
    })

    
  // Click Prices Tab
 // const virtualConsole = dom.createVirtualConsole();
 // virtualConsole.sendTo(console);
/*  const pricesTab: NodeListOf<Element> = dom.window.document.querySelectorAll('div[jsname="CzCxxd"]')
  pricesTab.forEach(tab => {
    if (tab.textContent == "Prices") {
      tab.addEventListener('click', () => {
        console.log("Prices Tab Clicked")
      })
      var event = new Event('click')
      tab.dispatchEvent(event)
    }

  });*/
  // set input text for start date
  // Get the span for hte prices tabpanel
  const tabPanels: NodeListOf<Element> = dom.window.document.querySelectorAll('span[role="tabpanel"][id="prices"]')
  console.log("tabPanels Count : " + tabPanels.length)
  
  const startDate: NodeListOf<Element> = tabPanels[0].querySelectorAll('input[aria-label="Check-in"]')
  const endDate: NodeListOf<Element> = tabPanels[0].querySelectorAll('input[aria-label="Check-out"]')
  console.log("startDate Count : " + startDate.length)
  console.log("endDate Count : " + endDate.length)
  
  
  
  console.log("startDate Value : " + startDate[0]?.outerHTML)
  startDate[0].id = "SDFSDFSDFFFDSFSDFSDF"
  endDate[0].id = "sdkjfsldfkjsldsdf"
  const startDateElement = dom.window.document.getElementById("SDFSDFSDFFFDSFSDFSDF")
  const endDateElement = dom.window.document.getElementById("sdkjfsldfkjsldsdf")
  console.log("startDate Value : " + startDateElement.value)
  console.log("endDate Value : " + endDateElement.value)
  //startDateElement.outerHTML = '<input type="text" jsname="yrriRe" class="TP4Lpb eoY5cb j0Ppje" value="Mon, Nov 11" placeholder="Check-in" aria-label="Check-in" spellcheck="false" aria-describedby="i46">'
  startDateElement.focus()
  startDateElement.value = ""
  simulateTyping(dom, startDateElement, "Mon, Dec 30")
    
  endDateElement.focus()
  console.log("startDate Value : " + startDateElement.value)
  console.log("endDate Value : " + endDateElement.value)



  const tabs2: NodeListOf<Element> = dom.window.document.querySelectorAll('div[jsname="CzCxxd"]')
  // Select the second element from the "Prices" tab
  
  const allOptions2: NodeListOf<Element> = tabs2[1].querySelectorAll('div[class="ADs2Tc"]')
  console.log("All Options 2: " + allOptions2.length)
  var responseString: string = "{";
// Ota NAnme    
   allOptions2.forEach(node => {
      const allSpans2: NodeListOf<Element> = node.querySelectorAll('span[data-click-type="268"]')
      //console.log("All Spans: " + allSpans.length)
      const otaName2 = allSpans2[0]?.textContent
      const allPriceSpans2: NodeListOf<Element> = node.querySelectorAll('span[class="MW1oTb"]')

     //console.log("OTA Name2: " + otaName2 + ' - ' + allPriceSpans2[0]?.textContent)
      responseString = responseString + '"' + otaName2 + '": "' + allPriceSpans2[0]?.textContent?.trim() + '",'
    })
    responseString = responseString.substring(0, responseString.length - 1)
    responseString = responseString + "}"

//console.log(responseString)
const jsonObject: Record<string, any> = JSON.parse(responseString);
console.log(jsonObject)












  //  startDateElement.focus()
  //  console.log(domPanels.window.document.activeElement === startDateElement);
    
    //const spaceDown = new domPanels.window.KeyboardEvent("keydown", { keyCode: 9 } as any);
    //domPanels.window.document.dispatchEvent(spaceDown);
    //console.log("startDate Value : " + startDate[0]?.outerHTML)
  // submit form

  


  const price = "test" //dom.window.document.querySelector("h2[All options]").textContent;
  //return Response.json({ price: price }, { status: 200 })
  return Response.json(jsonObject, { status: 200 })
}

function simulateTyping(dom: JSDOM, element: HTMLInputElement, text: string) {
  text.split('').forEach(char => {
    const event = new dom.window.KeyboardEvent('input', { key: char });
    element.value += char;
    element.dispatchEvent(event);
  });
}


function searchNodeList(nodeList: NodeListOf<Element>, searchText: string): string {
  // Search for the OTA name
  if (nodeList.length > 0) {
    if (nodeList[0]?.nodeName == "span") {
      if (nodeList[0]?.getAttribute('data-click-type') == "268"){ //AttributeNode["data-click-type"]?.textContent != "") {
       if (nodeList[0]?.textContent != undefined) {
       return nodeList[0].textContent;
        } 
      }
    }
  }
  if (nodeList[0]?.hasChildNodes()) {
    // Recursively search the child nodes
    nodeList[0].innerHTML
    return searchNodeList(nodeList[0].children, searchText);
  }
  // If the node being searched does not have child nodes, return an empty string to indicate that the search was unsuccessful
  return ""
  
}
function walkNodes(nodeList: NodeListOf<Node>) {
  if (nodeList.length > 0) {
    
    console.log(nodeList[0]?.nodeName + ": " + nodeList[0]?.textContent)
    
    walkNodes(nodeList[0].childNodes)
  }
  if (nodeList.length > 1) {
    console.log(nodeList[1]?.nodeName + ": " + nodeList[1]?.textContent)
    walkNodes(nodeList[1].childNodes)
  }
}


async function fetchHtml(url: string, userAgent: string, cookie: string): Promise<string> {
  try {
    const response = await axios.get(url, {
      headers: {
        'User-Agent': userAgent,
        'Cookie': cookie
      },
      withCredentials: true
    });
    return response.data;
  } catch (error: any) {
    throw new Error(`Failed to fetch HTML from ${url}: ${error.message}`);
  }
}