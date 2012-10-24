﻿function GetBehaviorSettings()
{
	return {
		"name":			"Chess",
		"id":			"Rex_chess",
		"description":	"Chess for board plugin.",
		"author":		"Rex.Rainbow",
		"help url":		"",
		"category":		"Board",
		"flags":		bf_onlyone
	};
};

//////////////////////////////////////////////////////////////
// Conditions
AddObjectParam("Chess", "Chess object B.");             
AddCondition(6, cf_trigger, "On collision", "Collisions", 
            "On {my} collided with <i>{0}</i>", "Triggered when the object collides with another object.", "OnCollided");
AddObjectParam("Chess", "Chess object B.");             
AddCondition(7, 0, "Is overlapping", "Collisions", 
            "Is {my} overlapping with <i>{0}</i>", "Test if the object is overlapping another object.", "IsOverlapping");
AddNumberParam("UID of chess", "UID of chess B.", 0);
AddCondition(9, 0, "Are neighbor (UID)", "Board", 
             "Are {my} and <i>{0}</i> neighbor", "Testing if two chess are neighbor.", "AreNeighbor");             
 
	  			 		 
//////////////////////////////////////////////////////////////
// Actions
AddObjectParam("Board", "Board object.");   
AddNumberParam("Logic X", "The X index (0-based) of the chess to set.", 0);
AddNumberParam("Logic Y", "The Y index (0-based) of the chess to set.", 0);
AddAnyTypeParam("Logic Z", "The Z index (0-based) of the chess to set. 0 is tile.", 0);
AddAction(1, 0, "Add chess", "Logic: Add", "Add {my} on <i>{0}</i>, at [<i>{1}</i>, <i>{2}</i>, <i>{3}</i>]", 
          "Add chess on the board.", "AddChess");
AddAction(2, 0, "Remove chess", "Logic: Remove", "Remove {my} from board", 
          "Remove chess from the board.", "RemoveChess"); 
AddObjectParam("Tile", "Tile object.");
AddAction(3, 0, "Move chess", "Logic: Move", 
          "Move {my} to tile <i>{0}</i>", 
          "Move chess on the board.", "MoveChess");   
AddNumberParam("Tile UID", "The UID of tile", 0);
AddAction(4, 0, "Move chess by UID", "Logic: Move", 
          "Move {my} to tile UID:<i>{0}</i>", 
          "Move chess by UID on the board.", "MoveChess");   
AddNumberParam("Logic X", "The X index (0-based) of the chess to set.", 0);
AddNumberParam("Logic Y", "The Y index (0-based) of the chess to set.", 0);
AddAnyTypeParam("Logic Z", "The Z index (0-based) of the chess to set. 0 is tile.", 0);
AddAction(5, 0, "Move chess to xyz", "Logic: Move", 
          "Move {my} to [<i>{0}</i>, <i>{1}</i>, <i>{2}</i>]", 
          "Move chess on the board.", "MoveChess2Index");  
AddNumberParam("UID of chess", "UID of chess B.", 0);
AddAction(6, 0, "Swap chess by UID", "Logic: Swap", 
          "Swap {my} with chess UID:<i>{1}</i>", 
          "Swap two chess by UID.", "SwapChess");                                              
//////////////////////////////////////////////////////////////
// Expressions
AddExpression(1, ef_return_number, 
              "Get X index of selected chess", "Chess", "LX", 
              "Get X index of selected chess.");            
AddExpression(2, ef_return_number, 
              "Get Y index of selected chess", "Chess", "LY", 
              "Get Y index of selected chess.");              
AddExpression(3, ef_return_any, 
              "Get Z index of selected chess", "Chess", "LZ", 
              "Get Z index of selected chess.");
AddAnyTypeParam("Z", "The logic Z.", 0);            
AddExpression(5, ef_return_number | ef_variadic_parameters,
              "Get UID by Z", "Chess", "LZ2UID",
              "Get UID by Z.");    
AddExpression(6, ef_return_number,
              "Get X co-ordinate", "Physical", "PX",
              "Get physical X co-ordinate.");                           
AddExpression(7, ef_return_number,
              "Get Y co-ordinate", "Physical", "PY",
              "Get physical Y co-ordinate.");   
AddNumberParam("FaceTo", "The UID of instance to face.", 0);         
AddExpression(10, ef_return_number | ef_variadic_parameters,
              "Get Logic angle by UID", "Chess", "UID2LA",
              "Get Logic angle by UID, in degree. (-1) is invalid angle.");            
AddExpression(13, ef_return_number, 
              "Get z count", "Chess", "ZCnt", 
              "Get z count.");
AddAnyTypeParam("Direction", "The direction.", 0);            
AddExpression(17, ef_return_number | ef_variadic_parameters,
              "Get neighbor UID by direction", "Chess", "DIR2UID",
              "Get neighbor UID by direction.");                                      
ACESDone();

// Property grid properties for this plugin
var property_list = [ 
	];
	
// Called by IDE when a new behavior type is to be created
function CreateIDEBehaviorType()
{
	return new IDEBehaviorType();
}

// Class representing a behavior type in the IDE
function IDEBehaviorType()
{
	assert2(this instanceof arguments.callee, "Constructor called as a function");
}

// Called by IDE when a new behavior instance of this type is to be created
IDEBehaviorType.prototype.CreateInstance = function(instance)
{
	return new IDEInstance(instance, this);
}

// Class representing an individual instance of an object in the IDE
function IDEInstance(instance, type)
{
	assert2(this instanceof arguments.callee, "Constructor called as a function");
	
	// Save the constructor parameters
	this.instance = instance;
	this.type = type;
	
	// Set the default property values from the property table
	this.properties = {};
	
	for (var i = 0; i < property_list.length; i++)
		this.properties[property_list[i].name] = property_list[i].initial_value;
}

// Called by the IDE after all initialization on this instance has been completed
IDEInstance.prototype.OnCreate = function()
{
}

// Called by the IDE after a property has been changed
IDEInstance.prototype.OnPropertyChanged = function(property_name)
{	
}