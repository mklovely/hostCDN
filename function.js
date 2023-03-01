   //// Font Size
   $("#fontFamily").change(function() {
    editor.updateOptions({ fontFamily: $(this).val(), });
  });

  //// Font Size
  $("#fontSize").change(function() {
    editor.updateOptions({ fontSize: $(this).val() + "px", });
  });

  //// Font Weight
  $("#fontWeight").change(function() {
    editor.updateOptions({ fontWeight: $(this).val(), });
  });

  //// Line Height
  $("#lineHeight").change(function() {
    editor.updateOptions({ lineHeight: $(this).val(), });
  });

  //// Minimap
  $("#minimap").change(function() {
     editor.updateOptions({minimap: { enabled: $(this).val() }},);
  });
  //// readOnly: true,
  $("#readonly").change(function() {
     editor.updateOptions({ readOnly: $(this).val(), },);
  });

  //// language,
  $("#language").change(function() {
     window.monaco.editor.setModelLanguage(window.monaco.editor.getModels()[0], $(this).val()) 
     emmetMonaco.emmetCSS(monaco);
     emmetMonaco.emmetJAVASCRIPT(monaco);
  });
 //// language,
 $("#themeToggle").change(function() {
     monaco.editor.setTheme($(this).val());
  });