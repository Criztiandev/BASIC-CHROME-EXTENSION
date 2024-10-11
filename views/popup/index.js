async function sayGreet() {
  let [tab] = await chrome.tabs.query({ active: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      document.body;
      alert("Greetings from the extension");
    },
  });
}

document.getElementById("greet-btn").addEventListener("click", sayGreet);
