﻿function GetPluginSettings()
{
	return {
		"name":			"JSON-TMX Importer",
		"id":			"Rex_JSONTMXImporter",
		"version":		"0.11",          
		"description":	"Create sprites according to json string transfered from tmx.",
		"author":		"Rex.Rainbow",
		"help url":		"",
		"category":		"Board",
		"type":			"object",			// not in layout
		"rotatable":	false,
		"flags":		0
	};
};

//////////////////////////////////////////////////////////////
// Conditions
AddCondition(1, cf_trigger, "On each tile cell", "Callback: Create tiless", 
             "On each tile cell", "Triggered when retrieving each avaiable tile cell.", "OnEachTileCell");
AddCondition(2, cf_trigger, "On each object", "Callback: Create tiless", 
             "On each object", "Triggered when retrieving each avaiable object on 'object layer'.", "OnEachObject");
//////////////////////////////////////////////////////////////
// Actions 
AddStringParam("TMX string", "The tmx string for loading.", '""');
AddAction(1, 0, "Import tmx", "TMX", "Import tmx string <i>{0}</i>",
         "Import tmx string.", "ImportTMX"); 
AddObjectParam("Tile", "Tile object.");
AddAction(2, 0, "Create tiles", "TMX", "Create tiles <i>{0}</i>",
         'Retrieve tile array and creating tiles. It will trigger "Condition:On each tile cell".', "CreateTiles");
AddAction(3, 0, "Release tmx object", "TMX", "Release tmx object",
         "Release tmx object.", "ReleaseTMX");       
AddAction(7, 0, "Retrieve tile array", "Advance", "Retrieve tile array",
         'Retrieve tile array. It will trigger "Condition:On each tile cell"', "RetrieveTileArray");         
AddNumberParam("X", "X co-ordinate of instance at Logic(0,0).", 0);
AddNumberParam("Y", "Y co-ordinate of instance at Logic(0,0).", 0);       
AddAction(10, 0, "Set instance position of (0,0)", "Setup", "Set instance position of (0,0) to (<i>{0}</i>,<i>{1}</i>)",
         "Set instance position of (0,0).", "SetOPosition");
         
//////////////////////////////////////////////////////////////
// Expressions
AddExpression(1, ef_return_number, 
              "Get map width", "Map", "MapWidth", "Get map width in tile number.");
AddExpression(2, ef_return_number, 
              "Get map height", "Map", "MapHeight", "Get map height in tile number.");
AddExpression(3, ef_return_number, 
              "Get tile width", "Map", "TileWidth", "Get tile width in pixel.");
AddExpression(4, ef_return_number, 
              "Get tile height", "Map", "TileHeight", "Get tile height in pixel.");  
AddExpression(5, ef_return_number, 
              "Get total width", "Map", "TotalWidth", "Get total width in pixel.");
AddExpression(6, ef_return_number, 
              "Get total height", "Map", "TotalHeight", "Get total height in pixel."); 
AddExpression(7, ef_return_number, 
              "Get orientation", "Map", "IsIsometric", "Get orientation. 1=Isometric, 0=Orthogonal");               
AddExpression(11, ef_return_number, 
              "Get tile id", "Tile: Layer", "TileID", "Get tile id.");           
AddExpression(12, ef_return_number, 
              "Get logic X index", "Tile: Layer", "LogicX", "Get logic X index of created instance.");
AddExpression(13, ef_return_number, 
              "Get logic Y index", "Tile: Layer", "LogicY", "Get logic Y index of created instance.");
AddStringParam("Name", "Property name.", '""');
AddExpression(14, ef_return_any | ef_variadic_parameters, 
              "Get layer properties", "Tile: Layer", "LayerProp", "Get layer properties of created instance. Add second parameters to set default value.");
AddStringParam("Name", "Property name.", '""');
AddExpression(15, ef_return_any | ef_variadic_parameters,
              "Get tileset properties", "Tile: Tileset", "TilesetProp", "Get tileset properties of created instance.  Add second parameters to set default value.");
AddStringParam("Name", "Property name.", '""');
AddExpression(16, ef_return_any | ef_variadic_parameters,
              "Get tile properties", "Tile: Tileset", "TileProp", "Get tile properties of created instance.  Add second parameters to set default value.");
AddExpression(17, ef_return_number, 
              "Get physical X position", "Tile: Layer", "PhysicalX", "Get physical X position (in pixel) of created instance.");
AddExpression(18, ef_return_number, 
              "Get physical Y position", "Tile: Layer", "PhysicalY", "Get logic Y position (in pixel) of created instance.");
AddExpression(19, ef_return_string, 
              "Get layer name", "Tile: Layer", "LayerName", "Get layer name of created instance.");
AddExpression(20, ef_return_number, 
              "Get layer opacity", "Tile: Layer", "LayerOpacity", "Get layer opacity of created instance.");
AddExpression(21, ef_return_number, 
              "Get mirrored", "Tile: Layer", "IsMirrored", "Get mirrored of created instance.");
AddExpression(22, ef_return_number, 
              "Get flipped", "Tile: Layer", "IsFlipped", "Get flipped of created instance.");
AddExpression(23, ef_return_number, 
              "Get instance UID", "Tile: Layer", "InstUID", 'Get instance UID created by "Action:Create tiles".');  
AddExpression(24, ef_return_number, 
              "Get frame number", "Tile: Layer", "Frame", "Get frame number.");                
AddExpression(25, ef_return_string, 
              "Get tileset name", "Map", "TilesetName", "Get tileset name.");
              
              
AddExpression(40, ef_return_string, 
              "Get object group name", "Object: Object group", "ObjGroupName", "Get object group name.");
AddExpression(41, ef_return_number, 
              "Get area width of object group", "Object: Object group", "ObjGroupWidth", "Get area width of object group.");
AddExpression(42, ef_return_number, 
              "Get area height of object group", "Object: Object group", "ObjGroupHeight", "Get area height of object group.");
AddExpression(50, ef_return_string, 
              "Get object name", "Object: Object", "ObjectName", "Get object name.");
AddExpression(51, ef_return_string, 
              "Get object type", "Object: Object", "ObjectType", "Get object type.");              
AddExpression(52, ef_return_number, 
              "Get area width of object", "Object: Object", "ObjectWidth", "Get area width of object.");
AddExpression(53, ef_return_number, 
              "Get area height of object", "Object: Object", "ObjectHeight", "Get area height of object.");
AddExpression(54, ef_return_number, 
              "Get logical X index of object", "Object: Object", "ObjectX", "Get logical X index of object.");
AddExpression(55, ef_return_number, 
              "Get logical Y index of object", "Object: Object", "ObjectY", "Get logical Y index of object.");
AddStringParam("Name", "Property name.", '""');
AddExpression(56, ef_return_any | ef_variadic_parameters,
              "Get object properties", "Object: Object", "ObjectProp", "Get object properties.  Add second parameters to set default value.");
AddExpression(57, ef_return_number, 
              "Get physical X position of object", "Object: Object", "ObjectPX", "Get physical X position (in pixel) of object.");
AddExpression(58, ef_return_number, 
              "Get physical Y position of object", "Object: Object", "ObjectPY", "Get physical Y position (in pixel) of object.");

              
ACESDone();

// Property grid properties for this plugin
var property_list = [  
    new cr.Property(ept_float, "X at (0,0)", 0, "Physical X co-ordinate at logic (0,0)."),
    new cr.Property(ept_float, "Y at (0,0)", 0, "Physical Y co-ordinate at logic (0,0)."),  
	];
	
// Called by IDE when a new object type is to be created
function CreateIDEObjectType()
{
	return new IDEObjectType();
}

// Class representing an object type in the IDE
function IDEObjectType()
{
	assert2(this instanceof arguments.callee, "Constructor called as a function");
}

// Called by IDE when a new object instance of this type is to be created
IDEObjectType.prototype.CreateInstance = function(instance)
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
	
// Called by the IDE to draw this instance in the editor
IDEInstance.prototype.Draw = function(renderer)
{
}

// Called by the IDE when the renderer has been released (ie. editor closed)
// All handles to renderer-created resources (fonts, textures etc) must be dropped.
// Don't worry about releasing them - the renderer will free them - just null out references.
IDEInstance.prototype.OnRendererReleased = function()
{
}