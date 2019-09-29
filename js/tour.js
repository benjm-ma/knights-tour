/*---BLOCK---:
* Makes up a board. Holds a
* coordinate in relation to other
* blocks (as determined by the
* board) and knows if it has been
* traversed.
* Date  : 12/02/2014
* Author: Benjamin Ahola
*/
function Block( isAlt, coord )
{
	this.alternate= isAlt;
	this.traveled= false;
	this.coord= coord;
	this.HTMLElement= "<div id=\""+ coord+"\""+
				" class=\"block "+ 
				(isAlt ? "alt-block " : "")+ 
				"row"+ coord.substr(1)+"\" >"+
				"</div>"; 

	/*---isTraveled---:
	* Returns whether or not this
	* block has been traveled 
	* before.
	*/
	this.isTraveled= function()
	{
		return this.traveled;
	}

	/*---wasTraveled---:
	* Marks this block as being traveled
	* and thus cannot be traversed by the
	* knight again. Also adds an element
	* for graphical purposes.
	*/
	this.wasTraveled= function()
	{
		this.traveled= !(this.traveled);
    // Clear piece from position
		document.getElementById(coord).innerHTML="&#10006;";
    // Add traversal marker
    document.getElementById(coord).classList.add("traversed");
	}

	
	/*---isAlternate
	* Returns either true
	* or false depending if
	* this block is even.
	*/
	this.isAlternate= function()
	{
		return this.alternate;
	}
	
	/*---getCoord
	* returns the coordinates of
	* this block.
	*/
	this.getCoord= function()
	{
		return this.coord;
	}
	
	/*---drawBlock---: 
	* returns the html element
	* which represents the block
	* and allows it to be styled.
	*/
	this.drawBlock= function()
	{
		return this.HTMLElement;
	}
}


/*---BOARD---:
* Constructs the logical structure 
* and draws a chess board onto the
* HTML document by a specified
* width and height in blocks. 
* Date  : 12/02/2014
* Author: Benjamin Ahola
*/
function Board( height, width )
{
	
	this.board= Array();		// Holds the rows of blocks
	this.heightInBlocks= height;
	this.widthInBlocks= width;
	this.boardHeightInPx= String( height* 128 )+ "px";  
	this.boardWidthInPx= String( width* 128 )+ "px";  
	//The side of a square block in a percentage
	this.blockSidePercentage= String((128/ (128* this.widthInBlocks))* 100)+ "%";

	/*---construct---:
	* Creates the logical foundation for
	* the board which includes column and
	* row naming, and individual Block
	* instantiation based off of these 
	* properties. 
	*/
	this.construct= function()
	{
		var isAlt= true;
		for( var rowNum= 0; rowNum< this.heightInBlocks; rowNum++ )
		{
			r= Array(); // Request new address for 'r'
			for( var colNum= 0; colNum< this.widthInBlocks; colNum++ )
			{
				isAlt= !isAlt;
				colLetter= String.fromCharCode("A".charCodeAt(0)+ colNum); 
				r[colLetter+ rowNum]= new Block( isAlt, colLetter+ rowNum );
			}
			this.board[rowNum]= r; 

			if( this.widthInBlocks% 2 == 0 )
				isAlt= !isAlt;		// No same colours in a column on boards with even widths
		}
	}

	/*---getHeightInBlocks---:
	* Retrieves the total number of blocks in
	* a column.
	*/
	this.getHeightInBlocks= function()
	{
		return this.heightInBlocks;
	}
	
	/*---getWidthInBlocks--:
	* Retrieves the total number of blocks in
	* a row.
	*/
	this.getWidthInBlocks= function()
	{
		return this.widthInBlocks;
	}

	/*---draw---:
	* Draws the board onto the document
	* within the element specifed by
	* the elemID.
	*/
	this.draw= function( elemID )
	{
		var blk;
		var brd= document.getElementById( elemID ).style;
		brd.width= this.boardWidthInPx;
		brd.height= this.boardHeightInPx;

		for( var r= 0; r< this.board.length; r++ )
			for( key in this.board[r] )
			{
				document.getElementById(elemID).innerHTML+= this.board[r][key].drawBlock();
				blk= document.getElementById(key).style;
				blk.width= this.blockSidePercentage;
				blk.height= this.blockSidePercentage;
			}
	
	}
}

/*---KNIGHT---
* This class defines the behaviours and 
* attributes of the player piece, the 
* knight.
* Date  : 12/02/2014 
* Author: Benjamin Ahola
*/
function Knight( strtinLoc, board )
{
	this.b= board;
	this.loc= strtinLoc;
	this.element= '<div id="knight-wrapper"> <svg>'+
	'<g transform="matrix(0.80267567,0,0,0.80267567,-407.94674,-429.34472)" id="layer1">'+
    '<path d="m 522.64368,673.91803 c -0.30301,-0.38923 -0.87325,-2.27425 -1.2672,-4.18892 -1.22004,-5.92981 0.23101,-11.43136 3.01504,-11.43136 1.10094,0 1.27182,-0.23031 1.04629,-1.41008 -0.36704,-1.9201 0.7577,-3.09184 2.96785,-3.09184 l 1.84168,0 -1.11413,-3.51712 c -1.73023,-5.46209 -1.22104,-14.2441 1.20703,-20.81816 3.32,-8.98891 9.73046,-18.24323 20.32012,-29.33471 4.06763,-4.26039 5.2949,-5.83994 4.21989,-5.43122 -2.56574,0.9755 -7.51371,0.644 -13.09895,-0.87759 -3.15915,-0.86065 -5.91762,-1.30816 -6.76013,-1.09669 -0.7828,0.19646 -2.85403,1.72191 -4.60272,3.38988 -1.74869,1.66798 -3.88528,3.30103 -4.74797,3.62903 -4.14801,1.57707 -11.47359,-0.0911 -14.30665,-3.25792 -3.0291,-3.38593 -3.54692,-4.6802 -2.86321,-7.15639 0.32766,-1.1867 0.44683,-3.3098 0.26482,-4.718 l -0.33093,-2.56037 4.71087,-3.79602 c 8.75523,-7.05501 15.78792,-13.76133 17.78271,-16.95751 2.08173,-3.33544 1.58402,-3.03394 12.25581,-7.42454 1.91961,-0.78977 1.9443,-0.92313 0.89461,-4.83159 -0.19586,-0.72928 0.37565,-1.06784 2.61233,-1.54753 1.57467,-0.3377 3.22561,-0.61401 3.66874,-0.61401 1.17525,0 1.59026,-2.3957 1.20532,-6.95784 -0.51229,-6.07144 0.0974,-6.41121 4.05373,-2.259 1.80527,1.89463 3.889,4.50721 4.63052,5.80574 1.22814,2.15068 1.76218,2.50236 5.9955,3.94846 5.62019,1.91983 10.69247,5.12954 14.94914,9.45974 4.45402,4.53096 5.79856,6.45002 8.59304,12.2649 3.68856,7.67532 4.93927,13.50128 4.94591,23.03851 0.007,9.28417 -0.80656,13.37813 -5.64361,28.41833 -4.43016,13.77507 -5.22413,17.01249 -5.58944,22.79094 -0.40395,6.3898 0.5127,10.03063 2.59925,10.32392 2.06719,0.29058 2.91483,1.24091 2.65936,2.98155 -0.19353,1.31866 -0.0111,1.57726 1.21409,1.72023 2.69878,0.31496 3.48694,3.91288 2.81046,12.8299 l -0.2348,3.09507 -34.67671,0.14495 c -27.32399,0.11421 -34.79353,-0.005 -35.22766,-0.56274 z"'+
    'id="path4090" style="fill:#6c5353;fill-opacity:1" /></g></svg></div>';

/*--getLocation--:
* Returns the current location of the knight.
* return: loc = '[A-Z][0-9]'
*/
this.getLocation= function()
{
	return this.loc;
}

/*--to--:
* Moves the knight to the recieved 
* coordinate both logically and 
* graphically.
* param: newLoc = '[A-Z][0-9]'
*/
this.to= function( newLoc )
{
	//Mark current block as traveled
	this.b[parseInt(this.loc.substr(1))][this.loc].wasTraveled();

	this.loc= newLoc;
	this.draw();
}

/*--getKnightElement--:
* Inserts the element which graphically 
* represents the knight into the HTML
* element which has an ID of '[A-Z][0-9]'
*/
this.draw= function()
{
	document.getElementById(this.loc).innerHTML= this.element;
}

/*--isLegalMove--:
* Determines whether a recieved board 
* coordinate legally follows from the 
* current board coordinate the knight
* occupies. The legality of the move
* is determined by the rules which 
* restrict a knights movement
* param: dest = '[A-Z][0-9]'
* returns: boolean
*/
this.isLegalMove= function( dest )
{
	// Has this block been visited?
	if( ! this.b[parseInt(dest.substr(1))][dest].isTraveled() ) 
	{
		// Parse given & current coordinates once '[A-Z][0-9]'
		var colNum= this.loc.substr(0, 1).charCodeAt(0);
		var row= parseInt(this.loc.substr(1));
		var newColNum= dest.substr(0, 1).charCodeAt(0);
		var newRow= parseInt(dest.substr(1));
			
			if( newColNum == colNum- 1 || newColNum == colNum+ 1 )
			{
				if( newRow == row+ 2 || newRow == row- 2)
					return true;
				else
					return false;
			}
			else if( newColNum == colNum+ 2 || newColNum == colNum- 2 )
			{
				if( newRow == row+ 1|| newRow == row- 1 )
					return true;
				else
					return false;
			}
			else 
				return false;
	} 
	else  
		return false;
}
}
