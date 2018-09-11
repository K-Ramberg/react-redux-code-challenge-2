### Notes

This assessment was my first indepth, hands-on undertaking with Redux. Additionally, this particular setup pattern of reducers, actions, and types is one I had never seen before. While I had admittedly overestimated my abailities to complete the entire task in the timeframe I allowed myself, I did come away with a working understanding of how this application was intended to work using Redux.

##### Wins
- Successfully created my own store files with working types, actions, and reducers (still taking advantage of the pre-created createDefaultReducer helper).
- I Set up Home page widgets as requested.
- Working forms were created for adding both companies and employees to state. 
- The Employee form and Company Directory both disable when no companies present. 
- The Details page has been routed to display only for specifically selected company.
- I decided to leave in extra company removal options to the Company Directory that were intially created for testing, but seemed beneficial for the user experience of the application. 


##### Losses
- For fear of time, I didn't create a seperate, reusable form component with reusable submit functions. 
- I was not able to complete the form Validations
- I did not spend enough time on the .less document stylings to exploit the efficiency 

#### Final Thoughts

Ultimately, working on this assignment has been tremedously beneficial. I have gained significant knowledge with Redux functions. This particular setup opened my eyes to new ways state components can be made more efficient (especially abandoning the typical Redux Types switch statements for a reusable default reducer and map of the Types). 
Adittioanlly, I got my first experience with {less} for CSS. In this assignment, I used some of the basic less functioanlity and often opted for more traditional CSS practices for the sake fo time; but I am now very much interested to take a deeper look at the efficiency {less} can offer with reusable style variables and functions. 