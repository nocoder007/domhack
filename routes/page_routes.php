<?php

// =======> '/' <=======
Route::get('/', function () {
  global $altrp_env;
  global $altrp_current_page;
  $_frontend_route = \App\Page::find(1);
  /*
  try{
    if( $_frontend_route && ! $_frontend_route->allowedForUser() ){
      $url = $_frontend_route->redirect ? $_frontend_route->redirect : '/';
      return redirect($url);
    }
  } catch( Exception $e ){

  }
  */
  $altrp_current_page = $_frontend_route;
  $_frontend_route['data_sources'] = $_frontend_route->page_data_sources->map(function (App\PageDatasource $page_data_source) {
    if ($page_data_source->source) {
      $page_data_source->source->web_url = $page_data_source->source->web_url;
    }
    return $page_data_source;
  });
  $model_data = [];
  $params_string = '';
  if( false !== false && $_frontend_route['model'] ) {
    $model = $_frontend_route['model']->toArray();
    if( isset( $model['namespace'] ) ){
      try {
        $relations = App\Altrp\Relationship::where( [['model_id',$model['id']],['always_with',1]] )->get()->implode( 'name', ',' );
        $relations = $relations ? explode( ',',$relations ) : false;
        $model = new $model['namespace'];
        if ( $relations ) {
          $model = $model->load( $relations );
        }
        $model = $model->find( 0 );
        if( ! $model ){
          throw new \Symfony\Component\HttpKernel\Exception\NotFoundHttpException( 'Model not found' );
        }
        $model_data = $model->toArray();
        $altrp_env = $model_data;
      } catch( Exception $e ) {
        $model_data = [];
      }
    }
  }
  $datasources = getDataSources( $_frontend_route['id'], func_get_args(), $params_string );
  $preload_content = \App\Page::getPreloadPageContent( $_frontend_route['id'] );
  $preload_content['content'] = replaceContentWithData( $preload_content['content'] );
  $page_areas = \App\Page::get_areas_for_page( $_frontend_route['id'] );
  $lazy_sections = [];
  $elements_list = extractElementsNames( $page_areas , ! ! $preload_content['content']);
  $altrp_settings = getAltrpSettings( $_frontend_route['id'] );

  if (\App\Page::isCached( $_frontend_route['id'] )) {
    global $altrp_need_cache;
    $altrp_need_cache = true;
    global $altrp_route_id;
    $altrp_route_id = $_frontend_route['id'];
  }
  $pages = \App\Page::get_pages_for_frontend( true, $_frontend_route['id'], ! ! $preload_content['content'] );

  return view( 'front-app', [
    'page_areas' => json_encode( $page_areas ),
    'altrp_settings' => json_encode( $altrp_settings ),
    'lazy_sections' => json_encode( $lazy_sections ),
    'elements_list' => json_encode( $elements_list ),
    'page_id' => $_frontend_route['id'],
    'title' => 'Home',
    '_frontend_route' => $_frontend_route,
    'pages'=> $pages,
    'preload_content' => $preload_content,
    'model_data' => $model_data,
    'datasources' => $datasources,
    'is_admin' => isAdmin(),
  ]);
})->middleware(['web', 'installation.checker', 'after'])->name( 'page_' . 1);

// =======> '/lk-client' <=======
Route::get('/lk-client', function () {
  global $altrp_env;
  global $altrp_current_page;
  $_frontend_route = \App\Page::find(2);
  /*
  try{
    if( $_frontend_route && ! $_frontend_route->allowedForUser() ){
      $url = $_frontend_route->redirect ? $_frontend_route->redirect : '/';
      return redirect($url);
    }
  } catch( Exception $e ){

  }
  */
  $altrp_current_page = $_frontend_route;
  $_frontend_route['data_sources'] = $_frontend_route->page_data_sources->map(function (App\PageDatasource $page_data_source) {
    if ($page_data_source->source) {
      $page_data_source->source->web_url = $page_data_source->source->web_url;
    }
    return $page_data_source;
  });
  $model_data = [];
  $params_string = '';
  if( false !== false && $_frontend_route['model'] ) {
    $model = $_frontend_route['model']->toArray();
    if( isset( $model['namespace'] ) ){
      try {
        $relations = App\Altrp\Relationship::where( [['model_id',$model['id']],['always_with',1]] )->get()->implode( 'name', ',' );
        $relations = $relations ? explode( ',',$relations ) : false;
        $model = new $model['namespace'];
        if ( $relations ) {
          $model = $model->load( $relations );
        }
        $model = $model->find( 0 );
        if( ! $model ){
          throw new \Symfony\Component\HttpKernel\Exception\NotFoundHttpException( 'Model not found' );
        }
        $model_data = $model->toArray();
        $altrp_env = $model_data;
      } catch( Exception $e ) {
        $model_data = [];
      }
    }
  }
  $datasources = getDataSources( $_frontend_route['id'], func_get_args(), $params_string );
  $preload_content = \App\Page::getPreloadPageContent( $_frontend_route['id'] );
  $preload_content['content'] = replaceContentWithData( $preload_content['content'] );
  $page_areas = \App\Page::get_areas_for_page( $_frontend_route['id'] );
  $lazy_sections = [];
  $elements_list = extractElementsNames( $page_areas , ! ! $preload_content['content']);
  $altrp_settings = getAltrpSettings( $_frontend_route['id'] );

  if (\App\Page::isCached( $_frontend_route['id'] )) {
    global $altrp_need_cache;
    $altrp_need_cache = true;
    global $altrp_route_id;
    $altrp_route_id = $_frontend_route['id'];
  }
  $pages = \App\Page::get_pages_for_frontend( true, $_frontend_route['id'], ! ! $preload_content['content'] );

  return view( 'front-app', [
    'page_areas' => json_encode( $page_areas ),
    'altrp_settings' => json_encode( $altrp_settings ),
    'lazy_sections' => json_encode( $lazy_sections ),
    'elements_list' => json_encode( $elements_list ),
    'page_id' => $_frontend_route['id'],
    'title' => 'Личный кабинет заемщика',
    '_frontend_route' => $_frontend_route,
    'pages'=> $pages,
    'preload_content' => $preload_content,
    'model_data' => $model_data,
    'datasources' => $datasources,
    'is_admin' => isAdmin(),
  ]);
})->middleware(['web', 'installation.checker', 'after'])->name( 'page_' . 2);

// =======> '/login' <=======
Route::get('/login', function () {
  global $altrp_env;
  global $altrp_current_page;
  $_frontend_route = \App\Page::find(3);
  /*
  try{
    if( $_frontend_route && ! $_frontend_route->allowedForUser() ){
      $url = $_frontend_route->redirect ? $_frontend_route->redirect : '/';
      return redirect($url);
    }
  } catch( Exception $e ){

  }
  */
  $altrp_current_page = $_frontend_route;
  $_frontend_route['data_sources'] = $_frontend_route->page_data_sources->map(function (App\PageDatasource $page_data_source) {
    if ($page_data_source->source) {
      $page_data_source->source->web_url = $page_data_source->source->web_url;
    }
    return $page_data_source;
  });
  $model_data = [];
  $params_string = '';
  if( false !== false && $_frontend_route['model'] ) {
    $model = $_frontend_route['model']->toArray();
    if( isset( $model['namespace'] ) ){
      try {
        $relations = App\Altrp\Relationship::where( [['model_id',$model['id']],['always_with',1]] )->get()->implode( 'name', ',' );
        $relations = $relations ? explode( ',',$relations ) : false;
        $model = new $model['namespace'];
        if ( $relations ) {
          $model = $model->load( $relations );
        }
        $model = $model->find( 0 );
        if( ! $model ){
          throw new \Symfony\Component\HttpKernel\Exception\NotFoundHttpException( 'Model not found' );
        }
        $model_data = $model->toArray();
        $altrp_env = $model_data;
      } catch( Exception $e ) {
        $model_data = [];
      }
    }
  }
  $datasources = getDataSources( $_frontend_route['id'], func_get_args(), $params_string );
  $preload_content = \App\Page::getPreloadPageContent( $_frontend_route['id'] );
  $preload_content['content'] = replaceContentWithData( $preload_content['content'] );
  $page_areas = \App\Page::get_areas_for_page( $_frontend_route['id'] );
  $lazy_sections = [];
  $elements_list = extractElementsNames( $page_areas , ! ! $preload_content['content']);
  $altrp_settings = getAltrpSettings( $_frontend_route['id'] );

  if (\App\Page::isCached( $_frontend_route['id'] )) {
    global $altrp_need_cache;
    $altrp_need_cache = true;
    global $altrp_route_id;
    $altrp_route_id = $_frontend_route['id'];
  }
  $pages = \App\Page::get_pages_for_frontend( true, $_frontend_route['id'], ! ! $preload_content['content'] );

  return view( 'front-app', [
    'page_areas' => json_encode( $page_areas ),
    'altrp_settings' => json_encode( $altrp_settings ),
    'lazy_sections' => json_encode( $lazy_sections ),
    'elements_list' => json_encode( $elements_list ),
    'page_id' => $_frontend_route['id'],
    'title' => 'Вход в личный кабинет',
    '_frontend_route' => $_frontend_route,
    'pages'=> $pages,
    'preload_content' => $preload_content,
    'model_data' => $model_data,
    'datasources' => $datasources,
    'is_admin' => isAdmin(),
  ]);
})->middleware(['web', 'installation.checker', 'after'])->name( 'page_' . 3);

// =======> '/registration' <=======
Route::get('/registration', function () {
  global $altrp_env;
  global $altrp_current_page;
  $_frontend_route = \App\Page::find(4);
  /*
  try{
    if( $_frontend_route && ! $_frontend_route->allowedForUser() ){
      $url = $_frontend_route->redirect ? $_frontend_route->redirect : '/';
      return redirect($url);
    }
  } catch( Exception $e ){

  }
  */
  $altrp_current_page = $_frontend_route;
  $_frontend_route['data_sources'] = $_frontend_route->page_data_sources->map(function (App\PageDatasource $page_data_source) {
    if ($page_data_source->source) {
      $page_data_source->source->web_url = $page_data_source->source->web_url;
    }
    return $page_data_source;
  });
  $model_data = [];
  $params_string = '';
  if( false !== false && $_frontend_route['model'] ) {
    $model = $_frontend_route['model']->toArray();
    if( isset( $model['namespace'] ) ){
      try {
        $relations = App\Altrp\Relationship::where( [['model_id',$model['id']],['always_with',1]] )->get()->implode( 'name', ',' );
        $relations = $relations ? explode( ',',$relations ) : false;
        $model = new $model['namespace'];
        if ( $relations ) {
          $model = $model->load( $relations );
        }
        $model = $model->find( 0 );
        if( ! $model ){
          throw new \Symfony\Component\HttpKernel\Exception\NotFoundHttpException( 'Model not found' );
        }
        $model_data = $model->toArray();
        $altrp_env = $model_data;
      } catch( Exception $e ) {
        $model_data = [];
      }
    }
  }
  $datasources = getDataSources( $_frontend_route['id'], func_get_args(), $params_string );
  $preload_content = \App\Page::getPreloadPageContent( $_frontend_route['id'] );
  $preload_content['content'] = replaceContentWithData( $preload_content['content'] );
  $page_areas = \App\Page::get_areas_for_page( $_frontend_route['id'] );
  $lazy_sections = [];
  $elements_list = extractElementsNames( $page_areas , ! ! $preload_content['content']);
  $altrp_settings = getAltrpSettings( $_frontend_route['id'] );

  if (\App\Page::isCached( $_frontend_route['id'] )) {
    global $altrp_need_cache;
    $altrp_need_cache = true;
    global $altrp_route_id;
    $altrp_route_id = $_frontend_route['id'];
  }
  $pages = \App\Page::get_pages_for_frontend( true, $_frontend_route['id'], ! ! $preload_content['content'] );

  return view( 'front-app', [
    'page_areas' => json_encode( $page_areas ),
    'altrp_settings' => json_encode( $altrp_settings ),
    'lazy_sections' => json_encode( $lazy_sections ),
    'elements_list' => json_encode( $elements_list ),
    'page_id' => $_frontend_route['id'],
    'title' => 'Регистрация',
    '_frontend_route' => $_frontend_route,
    'pages'=> $pages,
    'preload_content' => $preload_content,
    'model_data' => $model_data,
    'datasources' => $datasources,
    'is_admin' => isAdmin(),
  ]);
})->middleware(['web', 'installation.checker', 'after'])->name( 'page_' . 4);

// =======> '/lk-client/heder/heder' <=======
Route::get('/lk-client/heder/heder', function () {
  global $altrp_env;
  global $altrp_current_page;
  $_frontend_route = \App\Page::find(5);
  /*
  try{
    if( $_frontend_route && ! $_frontend_route->allowedForUser() ){
      $url = $_frontend_route->redirect ? $_frontend_route->redirect : '/';
      return redirect($url);
    }
  } catch( Exception $e ){

  }
  */
  $altrp_current_page = $_frontend_route;
  $_frontend_route['data_sources'] = $_frontend_route->page_data_sources->map(function (App\PageDatasource $page_data_source) {
    if ($page_data_source->source) {
      $page_data_source->source->web_url = $page_data_source->source->web_url;
    }
    return $page_data_source;
  });
  $model_data = [];
  $params_string = '';
  if( false !== false && $_frontend_route['model'] ) {
    $model = $_frontend_route['model']->toArray();
    if( isset( $model['namespace'] ) ){
      try {
        $relations = App\Altrp\Relationship::where( [['model_id',$model['id']],['always_with',1]] )->get()->implode( 'name', ',' );
        $relations = $relations ? explode( ',',$relations ) : false;
        $model = new $model['namespace'];
        if ( $relations ) {
          $model = $model->load( $relations );
        }
        $model = $model->find( 0 );
        if( ! $model ){
          throw new \Symfony\Component\HttpKernel\Exception\NotFoundHttpException( 'Model not found' );
        }
        $model_data = $model->toArray();
        $altrp_env = $model_data;
      } catch( Exception $e ) {
        $model_data = [];
      }
    }
  }
  $datasources = getDataSources( $_frontend_route['id'], func_get_args(), $params_string );
  $preload_content = \App\Page::getPreloadPageContent( $_frontend_route['id'] );
  $preload_content['content'] = replaceContentWithData( $preload_content['content'] );
  $page_areas = \App\Page::get_areas_for_page( $_frontend_route['id'] );
  $lazy_sections = [];
  $elements_list = extractElementsNames( $page_areas , ! ! $preload_content['content']);
  $altrp_settings = getAltrpSettings( $_frontend_route['id'] );

  if (\App\Page::isCached( $_frontend_route['id'] )) {
    global $altrp_need_cache;
    $altrp_need_cache = true;
    global $altrp_route_id;
    $altrp_route_id = $_frontend_route['id'];
  }
  $pages = \App\Page::get_pages_for_frontend( true, $_frontend_route['id'], ! ! $preload_content['content'] );

  return view( 'front-app', [
    'page_areas' => json_encode( $page_areas ),
    'altrp_settings' => json_encode( $altrp_settings ),
    'lazy_sections' => json_encode( $lazy_sections ),
    'elements_list' => json_encode( $elements_list ),
    'page_id' => $_frontend_route['id'],
    'title' => 'Хедер',
    '_frontend_route' => $_frontend_route,
    'pages'=> $pages,
    'preload_content' => $preload_content,
    'model_data' => $model_data,
    'datasources' => $datasources,
    'is_admin' => isAdmin(),
  ]);
})->middleware(['web', 'installation.checker', 'after'])->name( 'page_' . 5);

// =======> '/lk-bank' <=======
Route::get('/lk-bank', function () {
  global $altrp_env;
  global $altrp_current_page;
  $_frontend_route = \App\Page::find(8);
  /*
  try{
    if( $_frontend_route && ! $_frontend_route->allowedForUser() ){
      $url = $_frontend_route->redirect ? $_frontend_route->redirect : '/';
      return redirect($url);
    }
  } catch( Exception $e ){

  }
  */
  $altrp_current_page = $_frontend_route;
  $_frontend_route['data_sources'] = $_frontend_route->page_data_sources->map(function (App\PageDatasource $page_data_source) {
    if ($page_data_source->source) {
      $page_data_source->source->web_url = $page_data_source->source->web_url;
    }
    return $page_data_source;
  });
  $model_data = [];
  $params_string = '';
  if( false !== false && $_frontend_route['model'] ) {
    $model = $_frontend_route['model']->toArray();
    if( isset( $model['namespace'] ) ){
      try {
        $relations = App\Altrp\Relationship::where( [['model_id',$model['id']],['always_with',1]] )->get()->implode( 'name', ',' );
        $relations = $relations ? explode( ',',$relations ) : false;
        $model = new $model['namespace'];
        if ( $relations ) {
          $model = $model->load( $relations );
        }
        $model = $model->find( 0 );
        if( ! $model ){
          throw new \Symfony\Component\HttpKernel\Exception\NotFoundHttpException( 'Model not found' );
        }
        $model_data = $model->toArray();
        $altrp_env = $model_data;
      } catch( Exception $e ) {
        $model_data = [];
      }
    }
  }
  $datasources = getDataSources( $_frontend_route['id'], func_get_args(), $params_string );
  $preload_content = \App\Page::getPreloadPageContent( $_frontend_route['id'] );
  $preload_content['content'] = replaceContentWithData( $preload_content['content'] );
  $page_areas = \App\Page::get_areas_for_page( $_frontend_route['id'] );
  $lazy_sections = [];
  $elements_list = extractElementsNames( $page_areas , ! ! $preload_content['content']);
  $altrp_settings = getAltrpSettings( $_frontend_route['id'] );

  if (\App\Page::isCached( $_frontend_route['id'] )) {
    global $altrp_need_cache;
    $altrp_need_cache = true;
    global $altrp_route_id;
    $altrp_route_id = $_frontend_route['id'];
  }
  $pages = \App\Page::get_pages_for_frontend( true, $_frontend_route['id'], ! ! $preload_content['content'] );

  return view( 'front-app', [
    'page_areas' => json_encode( $page_areas ),
    'altrp_settings' => json_encode( $altrp_settings ),
    'lazy_sections' => json_encode( $lazy_sections ),
    'elements_list' => json_encode( $elements_list ),
    'page_id' => $_frontend_route['id'],
    'title' => 'Личный кабинет банка',
    '_frontend_route' => $_frontend_route,
    'pages'=> $pages,
    'preload_content' => $preload_content,
    'model_data' => $model_data,
    'datasources' => $datasources,
    'is_admin' => isAdmin(),
  ]);
})->middleware(['web', 'installation.checker', 'after'])->name( 'page_' . 8);

// =======> '/lk-insurance' <=======
Route::get('/lk-insurance', function () {
  global $altrp_env;
  global $altrp_current_page;
  $_frontend_route = \App\Page::find(9);
  /*
  try{
    if( $_frontend_route && ! $_frontend_route->allowedForUser() ){
      $url = $_frontend_route->redirect ? $_frontend_route->redirect : '/';
      return redirect($url);
    }
  } catch( Exception $e ){

  }
  */
  $altrp_current_page = $_frontend_route;
  $_frontend_route['data_sources'] = $_frontend_route->page_data_sources->map(function (App\PageDatasource $page_data_source) {
    if ($page_data_source->source) {
      $page_data_source->source->web_url = $page_data_source->source->web_url;
    }
    return $page_data_source;
  });
  $model_data = [];
  $params_string = '';
  if( false !== false && $_frontend_route['model'] ) {
    $model = $_frontend_route['model']->toArray();
    if( isset( $model['namespace'] ) ){
      try {
        $relations = App\Altrp\Relationship::where( [['model_id',$model['id']],['always_with',1]] )->get()->implode( 'name', ',' );
        $relations = $relations ? explode( ',',$relations ) : false;
        $model = new $model['namespace'];
        if ( $relations ) {
          $model = $model->load( $relations );
        }
        $model = $model->find( 0 );
        if( ! $model ){
          throw new \Symfony\Component\HttpKernel\Exception\NotFoundHttpException( 'Model not found' );
        }
        $model_data = $model->toArray();
        $altrp_env = $model_data;
      } catch( Exception $e ) {
        $model_data = [];
      }
    }
  }
  $datasources = getDataSources( $_frontend_route['id'], func_get_args(), $params_string );
  $preload_content = \App\Page::getPreloadPageContent( $_frontend_route['id'] );
  $preload_content['content'] = replaceContentWithData( $preload_content['content'] );
  $page_areas = \App\Page::get_areas_for_page( $_frontend_route['id'] );
  $lazy_sections = [];
  $elements_list = extractElementsNames( $page_areas , ! ! $preload_content['content']);
  $altrp_settings = getAltrpSettings( $_frontend_route['id'] );

  if (\App\Page::isCached( $_frontend_route['id'] )) {
    global $altrp_need_cache;
    $altrp_need_cache = true;
    global $altrp_route_id;
    $altrp_route_id = $_frontend_route['id'];
  }
  $pages = \App\Page::get_pages_for_frontend( true, $_frontend_route['id'], ! ! $preload_content['content'] );

  return view( 'front-app', [
    'page_areas' => json_encode( $page_areas ),
    'altrp_settings' => json_encode( $altrp_settings ),
    'lazy_sections' => json_encode( $lazy_sections ),
    'elements_list' => json_encode( $elements_list ),
    'page_id' => $_frontend_route['id'],
    'title' => 'личный кабинет страховой',
    '_frontend_route' => $_frontend_route,
    'pages'=> $pages,
    'preload_content' => $preload_content,
    'model_data' => $model_data,
    'datasources' => $datasources,
    'is_admin' => isAdmin(),
  ]);
})->middleware(['web', 'installation.checker', 'after'])->name( 'page_' . 9);

// =======> '/c/admin' <=======
Route::get('/c/admin', function () {
  global $altrp_env;
  global $altrp_current_page;
  $_frontend_route = \App\Page::find(10);
  /*
  try{
    if( $_frontend_route && ! $_frontend_route->allowedForUser() ){
      $url = $_frontend_route->redirect ? $_frontend_route->redirect : '/';
      return redirect($url);
    }
  } catch( Exception $e ){

  }
  */
  $altrp_current_page = $_frontend_route;
  $_frontend_route['data_sources'] = $_frontend_route->page_data_sources->map(function (App\PageDatasource $page_data_source) {
    if ($page_data_source->source) {
      $page_data_source->source->web_url = $page_data_source->source->web_url;
    }
    return $page_data_source;
  });
  $model_data = [];
  $params_string = '';
  if( false !== false && $_frontend_route['model'] ) {
    $model = $_frontend_route['model']->toArray();
    if( isset( $model['namespace'] ) ){
      try {
        $relations = App\Altrp\Relationship::where( [['model_id',$model['id']],['always_with',1]] )->get()->implode( 'name', ',' );
        $relations = $relations ? explode( ',',$relations ) : false;
        $model = new $model['namespace'];
        if ( $relations ) {
          $model = $model->load( $relations );
        }
        $model = $model->find( 0 );
        if( ! $model ){
          throw new \Symfony\Component\HttpKernel\Exception\NotFoundHttpException( 'Model not found' );
        }
        $model_data = $model->toArray();
        $altrp_env = $model_data;
      } catch( Exception $e ) {
        $model_data = [];
      }
    }
  }
  $datasources = getDataSources( $_frontend_route['id'], func_get_args(), $params_string );
  $preload_content = \App\Page::getPreloadPageContent( $_frontend_route['id'] );
  $preload_content['content'] = replaceContentWithData( $preload_content['content'] );
  $page_areas = \App\Page::get_areas_for_page( $_frontend_route['id'] );
  $lazy_sections = [];
  $elements_list = extractElementsNames( $page_areas , ! ! $preload_content['content']);
  $altrp_settings = getAltrpSettings( $_frontend_route['id'] );

  if (\App\Page::isCached( $_frontend_route['id'] )) {
    global $altrp_need_cache;
    $altrp_need_cache = true;
    global $altrp_route_id;
    $altrp_route_id = $_frontend_route['id'];
  }
  $pages = \App\Page::get_pages_for_frontend( true, $_frontend_route['id'], ! ! $preload_content['content'] );

  return view( 'front-app', [
    'page_areas' => json_encode( $page_areas ),
    'altrp_settings' => json_encode( $altrp_settings ),
    'lazy_sections' => json_encode( $lazy_sections ),
    'elements_list' => json_encode( $elements_list ),
    'page_id' => $_frontend_route['id'],
    'title' => 'Личный кабинет',
    '_frontend_route' => $_frontend_route,
    'pages'=> $pages,
    'preload_content' => $preload_content,
    'model_data' => $model_data,
    'datasources' => $datasources,
    'is_admin' => isAdmin(),
  ]);
})->middleware(['web', 'installation.checker', 'after'])->name( 'page_' . 10);

// =======> '/c/admin/my-docs' <=======
Route::get('/c/admin/my-docs', function () {
  global $altrp_env;
  global $altrp_current_page;
  $_frontend_route = \App\Page::find(11);
  /*
  try{
    if( $_frontend_route && ! $_frontend_route->allowedForUser() ){
      $url = $_frontend_route->redirect ? $_frontend_route->redirect : '/';
      return redirect($url);
    }
  } catch( Exception $e ){

  }
  */
  $altrp_current_page = $_frontend_route;
  $_frontend_route['data_sources'] = $_frontend_route->page_data_sources->map(function (App\PageDatasource $page_data_source) {
    if ($page_data_source->source) {
      $page_data_source->source->web_url = $page_data_source->source->web_url;
    }
    return $page_data_source;
  });
  $model_data = [];
  $params_string = '';
  if( false !== false && $_frontend_route['model'] ) {
    $model = $_frontend_route['model']->toArray();
    if( isset( $model['namespace'] ) ){
      try {
        $relations = App\Altrp\Relationship::where( [['model_id',$model['id']],['always_with',1]] )->get()->implode( 'name', ',' );
        $relations = $relations ? explode( ',',$relations ) : false;
        $model = new $model['namespace'];
        if ( $relations ) {
          $model = $model->load( $relations );
        }
        $model = $model->find( 0 );
        if( ! $model ){
          throw new \Symfony\Component\HttpKernel\Exception\NotFoundHttpException( 'Model not found' );
        }
        $model_data = $model->toArray();
        $altrp_env = $model_data;
      } catch( Exception $e ) {
        $model_data = [];
      }
    }
  }
  $datasources = getDataSources( $_frontend_route['id'], func_get_args(), $params_string );
  $preload_content = \App\Page::getPreloadPageContent( $_frontend_route['id'] );
  $preload_content['content'] = replaceContentWithData( $preload_content['content'] );
  $page_areas = \App\Page::get_areas_for_page( $_frontend_route['id'] );
  $lazy_sections = [];
  $elements_list = extractElementsNames( $page_areas , ! ! $preload_content['content']);
  $altrp_settings = getAltrpSettings( $_frontend_route['id'] );

  if (\App\Page::isCached( $_frontend_route['id'] )) {
    global $altrp_need_cache;
    $altrp_need_cache = true;
    global $altrp_route_id;
    $altrp_route_id = $_frontend_route['id'];
  }
  $pages = \App\Page::get_pages_for_frontend( true, $_frontend_route['id'], ! ! $preload_content['content'] );

  return view( 'front-app', [
    'page_areas' => json_encode( $page_areas ),
    'altrp_settings' => json_encode( $altrp_settings ),
    'lazy_sections' => json_encode( $lazy_sections ),
    'elements_list' => json_encode( $elements_list ),
    'page_id' => $_frontend_route['id'],
    'title' => 'Мои договора',
    '_frontend_route' => $_frontend_route,
    'pages'=> $pages,
    'preload_content' => $preload_content,
    'model_data' => $model_data,
    'datasources' => $datasources,
    'is_admin' => isAdmin(),
  ]);
})->middleware(['web', 'installation.checker', 'after'])->name( 'page_' . 11);

// =======> '/c/admin/pay' <=======
Route::get('/c/admin/pay', function () {
  global $altrp_env;
  global $altrp_current_page;
  $_frontend_route = \App\Page::find(12);
  /*
  try{
    if( $_frontend_route && ! $_frontend_route->allowedForUser() ){
      $url = $_frontend_route->redirect ? $_frontend_route->redirect : '/';
      return redirect($url);
    }
  } catch( Exception $e ){

  }
  */
  $altrp_current_page = $_frontend_route;
  $_frontend_route['data_sources'] = $_frontend_route->page_data_sources->map(function (App\PageDatasource $page_data_source) {
    if ($page_data_source->source) {
      $page_data_source->source->web_url = $page_data_source->source->web_url;
    }
    return $page_data_source;
  });
  $model_data = [];
  $params_string = '';
  if( false !== false && $_frontend_route['model'] ) {
    $model = $_frontend_route['model']->toArray();
    if( isset( $model['namespace'] ) ){
      try {
        $relations = App\Altrp\Relationship::where( [['model_id',$model['id']],['always_with',1]] )->get()->implode( 'name', ',' );
        $relations = $relations ? explode( ',',$relations ) : false;
        $model = new $model['namespace'];
        if ( $relations ) {
          $model = $model->load( $relations );
        }
        $model = $model->find( 0 );
        if( ! $model ){
          throw new \Symfony\Component\HttpKernel\Exception\NotFoundHttpException( 'Model not found' );
        }
        $model_data = $model->toArray();
        $altrp_env = $model_data;
      } catch( Exception $e ) {
        $model_data = [];
      }
    }
  }
  $datasources = getDataSources( $_frontend_route['id'], func_get_args(), $params_string );
  $preload_content = \App\Page::getPreloadPageContent( $_frontend_route['id'] );
  $preload_content['content'] = replaceContentWithData( $preload_content['content'] );
  $page_areas = \App\Page::get_areas_for_page( $_frontend_route['id'] );
  $lazy_sections = [];
  $elements_list = extractElementsNames( $page_areas , ! ! $preload_content['content']);
  $altrp_settings = getAltrpSettings( $_frontend_route['id'] );

  if (\App\Page::isCached( $_frontend_route['id'] )) {
    global $altrp_need_cache;
    $altrp_need_cache = true;
    global $altrp_route_id;
    $altrp_route_id = $_frontend_route['id'];
  }
  $pages = \App\Page::get_pages_for_frontend( true, $_frontend_route['id'], ! ! $preload_content['content'] );

  return view( 'front-app', [
    'page_areas' => json_encode( $page_areas ),
    'altrp_settings' => json_encode( $altrp_settings ),
    'lazy_sections' => json_encode( $lazy_sections ),
    'elements_list' => json_encode( $elements_list ),
    'page_id' => $_frontend_route['id'],
    'title' => 'Оплаты по договорам',
    '_frontend_route' => $_frontend_route,
    'pages'=> $pages,
    'preload_content' => $preload_content,
    'model_data' => $model_data,
    'datasources' => $datasources,
    'is_admin' => isAdmin(),
  ]);
})->middleware(['web', 'installation.checker', 'after'])->name( 'page_' . 12);

// =======> '/c/admin/notify' <=======
Route::get('/c/admin/notify', function () {
  global $altrp_env;
  global $altrp_current_page;
  $_frontend_route = \App\Page::find(13);
  /*
  try{
    if( $_frontend_route && ! $_frontend_route->allowedForUser() ){
      $url = $_frontend_route->redirect ? $_frontend_route->redirect : '/';
      return redirect($url);
    }
  } catch( Exception $e ){

  }
  */
  $altrp_current_page = $_frontend_route;
  $_frontend_route['data_sources'] = $_frontend_route->page_data_sources->map(function (App\PageDatasource $page_data_source) {
    if ($page_data_source->source) {
      $page_data_source->source->web_url = $page_data_source->source->web_url;
    }
    return $page_data_source;
  });
  $model_data = [];
  $params_string = '';
  if( false !== false && $_frontend_route['model'] ) {
    $model = $_frontend_route['model']->toArray();
    if( isset( $model['namespace'] ) ){
      try {
        $relations = App\Altrp\Relationship::where( [['model_id',$model['id']],['always_with',1]] )->get()->implode( 'name', ',' );
        $relations = $relations ? explode( ',',$relations ) : false;
        $model = new $model['namespace'];
        if ( $relations ) {
          $model = $model->load( $relations );
        }
        $model = $model->find( 0 );
        if( ! $model ){
          throw new \Symfony\Component\HttpKernel\Exception\NotFoundHttpException( 'Model not found' );
        }
        $model_data = $model->toArray();
        $altrp_env = $model_data;
      } catch( Exception $e ) {
        $model_data = [];
      }
    }
  }
  $datasources = getDataSources( $_frontend_route['id'], func_get_args(), $params_string );
  $preload_content = \App\Page::getPreloadPageContent( $_frontend_route['id'] );
  $preload_content['content'] = replaceContentWithData( $preload_content['content'] );
  $page_areas = \App\Page::get_areas_for_page( $_frontend_route['id'] );
  $lazy_sections = [];
  $elements_list = extractElementsNames( $page_areas , ! ! $preload_content['content']);
  $altrp_settings = getAltrpSettings( $_frontend_route['id'] );

  if (\App\Page::isCached( $_frontend_route['id'] )) {
    global $altrp_need_cache;
    $altrp_need_cache = true;
    global $altrp_route_id;
    $altrp_route_id = $_frontend_route['id'];
  }
  $pages = \App\Page::get_pages_for_frontend( true, $_frontend_route['id'], ! ! $preload_content['content'] );

  return view( 'front-app', [
    'page_areas' => json_encode( $page_areas ),
    'altrp_settings' => json_encode( $altrp_settings ),
    'lazy_sections' => json_encode( $lazy_sections ),
    'elements_list' => json_encode( $elements_list ),
    'page_id' => $_frontend_route['id'],
    'title' => 'Уведомления',
    '_frontend_route' => $_frontend_route,
    'pages'=> $pages,
    'preload_content' => $preload_content,
    'model_data' => $model_data,
    'datasources' => $datasources,
    'is_admin' => isAdmin(),
  ]);
})->middleware(['web', 'installation.checker', 'after'])->name( 'page_' . 13);

// =======> '/c/admin/calc' <=======
Route::get('/c/admin/calc', function () {
  global $altrp_env;
  global $altrp_current_page;
  $_frontend_route = \App\Page::find(14);
  /*
  try{
    if( $_frontend_route && ! $_frontend_route->allowedForUser() ){
      $url = $_frontend_route->redirect ? $_frontend_route->redirect : '/';
      return redirect($url);
    }
  } catch( Exception $e ){

  }
  */
  $altrp_current_page = $_frontend_route;
  $_frontend_route['data_sources'] = $_frontend_route->page_data_sources->map(function (App\PageDatasource $page_data_source) {
    if ($page_data_source->source) {
      $page_data_source->source->web_url = $page_data_source->source->web_url;
    }
    return $page_data_source;
  });
  $model_data = [];
  $params_string = '';
  if( false !== false && $_frontend_route['model'] ) {
    $model = $_frontend_route['model']->toArray();
    if( isset( $model['namespace'] ) ){
      try {
        $relations = App\Altrp\Relationship::where( [['model_id',$model['id']],['always_with',1]] )->get()->implode( 'name', ',' );
        $relations = $relations ? explode( ',',$relations ) : false;
        $model = new $model['namespace'];
        if ( $relations ) {
          $model = $model->load( $relations );
        }
        $model = $model->find( 0 );
        if( ! $model ){
          throw new \Symfony\Component\HttpKernel\Exception\NotFoundHttpException( 'Model not found' );
        }
        $model_data = $model->toArray();
        $altrp_env = $model_data;
      } catch( Exception $e ) {
        $model_data = [];
      }
    }
  }
  $datasources = getDataSources( $_frontend_route['id'], func_get_args(), $params_string );
  $preload_content = \App\Page::getPreloadPageContent( $_frontend_route['id'] );
  $preload_content['content'] = replaceContentWithData( $preload_content['content'] );
  $page_areas = \App\Page::get_areas_for_page( $_frontend_route['id'] );
  $lazy_sections = [];
  $elements_list = extractElementsNames( $page_areas , ! ! $preload_content['content']);
  $altrp_settings = getAltrpSettings( $_frontend_route['id'] );

  if (\App\Page::isCached( $_frontend_route['id'] )) {
    global $altrp_need_cache;
    $altrp_need_cache = true;
    global $altrp_route_id;
    $altrp_route_id = $_frontend_route['id'];
  }
  $pages = \App\Page::get_pages_for_frontend( true, $_frontend_route['id'], ! ! $preload_content['content'] );

  return view( 'front-app', [
    'page_areas' => json_encode( $page_areas ),
    'altrp_settings' => json_encode( $altrp_settings ),
    'lazy_sections' => json_encode( $lazy_sections ),
    'elements_list' => json_encode( $elements_list ),
    'page_id' => $_frontend_route['id'],
    'title' => 'Страховой калькулятор',
    '_frontend_route' => $_frontend_route,
    'pages'=> $pages,
    'preload_content' => $preload_content,
    'model_data' => $model_data,
    'datasources' => $datasources,
    'is_admin' => isAdmin(),
  ]);
})->middleware(['web', 'installation.checker', 'after'])->name( 'page_' . 14);

// =======> '/c/admin/search' <=======
Route::get('/c/admin/search', function () {
  global $altrp_env;
  global $altrp_current_page;
  $_frontend_route = \App\Page::find(15);
  /*
  try{
    if( $_frontend_route && ! $_frontend_route->allowedForUser() ){
      $url = $_frontend_route->redirect ? $_frontend_route->redirect : '/';
      return redirect($url);
    }
  } catch( Exception $e ){

  }
  */
  $altrp_current_page = $_frontend_route;
  $_frontend_route['data_sources'] = $_frontend_route->page_data_sources->map(function (App\PageDatasource $page_data_source) {
    if ($page_data_source->source) {
      $page_data_source->source->web_url = $page_data_source->source->web_url;
    }
    return $page_data_source;
  });
  $model_data = [];
  $params_string = '';
  if( false !== false && $_frontend_route['model'] ) {
    $model = $_frontend_route['model']->toArray();
    if( isset( $model['namespace'] ) ){
      try {
        $relations = App\Altrp\Relationship::where( [['model_id',$model['id']],['always_with',1]] )->get()->implode( 'name', ',' );
        $relations = $relations ? explode( ',',$relations ) : false;
        $model = new $model['namespace'];
        if ( $relations ) {
          $model = $model->load( $relations );
        }
        $model = $model->find( 0 );
        if( ! $model ){
          throw new \Symfony\Component\HttpKernel\Exception\NotFoundHttpException( 'Model not found' );
        }
        $model_data = $model->toArray();
        $altrp_env = $model_data;
      } catch( Exception $e ) {
        $model_data = [];
      }
    }
  }
  $datasources = getDataSources( $_frontend_route['id'], func_get_args(), $params_string );
  $preload_content = \App\Page::getPreloadPageContent( $_frontend_route['id'] );
  $preload_content['content'] = replaceContentWithData( $preload_content['content'] );
  $page_areas = \App\Page::get_areas_for_page( $_frontend_route['id'] );
  $lazy_sections = [];
  $elements_list = extractElementsNames( $page_areas , ! ! $preload_content['content']);
  $altrp_settings = getAltrpSettings( $_frontend_route['id'] );

  if (\App\Page::isCached( $_frontend_route['id'] )) {
    global $altrp_need_cache;
    $altrp_need_cache = true;
    global $altrp_route_id;
    $altrp_route_id = $_frontend_route['id'];
  }
  $pages = \App\Page::get_pages_for_frontend( true, $_frontend_route['id'], ! ! $preload_content['content'] );

  return view( 'front-app', [
    'page_areas' => json_encode( $page_areas ),
    'altrp_settings' => json_encode( $altrp_settings ),
    'lazy_sections' => json_encode( $lazy_sections ),
    'elements_list' => json_encode( $elements_list ),
    'page_id' => $_frontend_route['id'],
    'title' => 'Поиск страховой компании',
    '_frontend_route' => $_frontend_route,
    'pages'=> $pages,
    'preload_content' => $preload_content,
    'model_data' => $model_data,
    'datasources' => $datasources,
    'is_admin' => isAdmin(),
  ]);
})->middleware(['web', 'installation.checker', 'after'])->name( 'page_' . 15);

// =======> '/c/admin/data' <=======
Route::get('/c/admin/data', function () {
  global $altrp_env;
  global $altrp_current_page;
  $_frontend_route = \App\Page::find(16);
  /*
  try{
    if( $_frontend_route && ! $_frontend_route->allowedForUser() ){
      $url = $_frontend_route->redirect ? $_frontend_route->redirect : '/';
      return redirect($url);
    }
  } catch( Exception $e ){

  }
  */
  $altrp_current_page = $_frontend_route;
  $_frontend_route['data_sources'] = $_frontend_route->page_data_sources->map(function (App\PageDatasource $page_data_source) {
    if ($page_data_source->source) {
      $page_data_source->source->web_url = $page_data_source->source->web_url;
    }
    return $page_data_source;
  });
  $model_data = [];
  $params_string = '';
  if( false !== false && $_frontend_route['model'] ) {
    $model = $_frontend_route['model']->toArray();
    if( isset( $model['namespace'] ) ){
      try {
        $relations = App\Altrp\Relationship::where( [['model_id',$model['id']],['always_with',1]] )->get()->implode( 'name', ',' );
        $relations = $relations ? explode( ',',$relations ) : false;
        $model = new $model['namespace'];
        if ( $relations ) {
          $model = $model->load( $relations );
        }
        $model = $model->find( 0 );
        if( ! $model ){
          throw new \Symfony\Component\HttpKernel\Exception\NotFoundHttpException( 'Model not found' );
        }
        $model_data = $model->toArray();
        $altrp_env = $model_data;
      } catch( Exception $e ) {
        $model_data = [];
      }
    }
  }
  $datasources = getDataSources( $_frontend_route['id'], func_get_args(), $params_string );
  $preload_content = \App\Page::getPreloadPageContent( $_frontend_route['id'] );
  $preload_content['content'] = replaceContentWithData( $preload_content['content'] );
  $page_areas = \App\Page::get_areas_for_page( $_frontend_route['id'] );
  $lazy_sections = [];
  $elements_list = extractElementsNames( $page_areas , ! ! $preload_content['content']);
  $altrp_settings = getAltrpSettings( $_frontend_route['id'] );

  if (\App\Page::isCached( $_frontend_route['id'] )) {
    global $altrp_need_cache;
    $altrp_need_cache = true;
    global $altrp_route_id;
    $altrp_route_id = $_frontend_route['id'];
  }
  $pages = \App\Page::get_pages_for_frontend( true, $_frontend_route['id'], ! ! $preload_content['content'] );

  return view( 'front-app', [
    'page_areas' => json_encode( $page_areas ),
    'altrp_settings' => json_encode( $altrp_settings ),
    'lazy_sections' => json_encode( $lazy_sections ),
    'elements_list' => json_encode( $elements_list ),
    'page_id' => $_frontend_route['id'],
    'title' => 'Личные данные',
    '_frontend_route' => $_frontend_route,
    'pages'=> $pages,
    'preload_content' => $preload_content,
    'model_data' => $model_data,
    'datasources' => $datasources,
    'is_admin' => isAdmin(),
  ]);
})->middleware(['web', 'installation.checker', 'after'])->name( 'page_' . 16);

// =======> '/c/admin/data/edit/{id}' <=======
Route::get('/c/admin/data/edit/{id}', function ($id) {
  global $altrp_env;
  global $altrp_current_page;
  $_frontend_route = \App\Page::find(18);
  /*
  try{
    if( $_frontend_route && ! $_frontend_route->allowedForUser() ){
      $url = $_frontend_route->redirect ? $_frontend_route->redirect : '/';
      return redirect($url);
    }
  } catch( Exception $e ){

  }
  */
  $altrp_current_page = $_frontend_route;
  $_frontend_route['data_sources'] = $_frontend_route->page_data_sources->map(function (App\PageDatasource $page_data_source) {
    if ($page_data_source->source) {
      $page_data_source->source->web_url = $page_data_source->source->web_url;
    }
    return $page_data_source;
  });
  $model_data = [];
  $params_string = '$id';
  if( 1 !== false && $_frontend_route['model'] ) {
    $model = $_frontend_route['model']->toArray();
    if( isset( $model['namespace'] ) ){
      try {
        $relations = App\Altrp\Relationship::where( [['model_id',$model['id']],['always_with',1]] )->get()->implode( 'name', ',' );
        $relations = $relations ? explode( ',',$relations ) : false;
        $model = new $model['namespace'];
        if ( $relations ) {
          $model = $model->load( $relations );
        }
        $model = $model->find( $id );
        if( ! $model ){
          throw new \Symfony\Component\HttpKernel\Exception\NotFoundHttpException( 'Model not found' );
        }
        $model_data = $model->toArray();
        $altrp_env = $model_data;
      } catch( Exception $e ) {
        $model_data = [];
      }
    }
  }
  $datasources = getDataSources( $_frontend_route['id'], func_get_args(), $params_string );
  $preload_content = \App\Page::getPreloadPageContent( $_frontend_route['id'] );
  $preload_content['content'] = replaceContentWithData( $preload_content['content'] );
  $page_areas = \App\Page::get_areas_for_page( $_frontend_route['id'] );
  $lazy_sections = [];
  $elements_list = extractElementsNames( $page_areas , ! ! $preload_content['content']);
  $altrp_settings = getAltrpSettings( $_frontend_route['id'] );

  if (\App\Page::isCached( $_frontend_route['id'] )) {
    global $altrp_need_cache;
    $altrp_need_cache = true;
    global $altrp_route_id;
    $altrp_route_id = $_frontend_route['id'];
  }
  $pages = \App\Page::get_pages_for_frontend( true, $_frontend_route['id'], ! ! $preload_content['content'] );

  return view( 'front-app', [
    'page_areas' => json_encode( $page_areas ),
    'altrp_settings' => json_encode( $altrp_settings ),
    'lazy_sections' => json_encode( $lazy_sections ),
    'elements_list' => json_encode( $elements_list ),
    'page_id' => $_frontend_route['id'],
    'title' => 'Редактировать личные данные',
    '_frontend_route' => $_frontend_route,
    'pages'=> $pages,
    'preload_content' => $preload_content,
    'model_data' => $model_data,
    'datasources' => $datasources,
    'is_admin' => isAdmin(),
  ]);
})->middleware(['web', 'installation.checker', 'after'])->name( 'page_' . 18);

// =======> '/c/admin/data/add' <=======
Route::get('/c/admin/data/add', function () {
  global $altrp_env;
  global $altrp_current_page;
  $_frontend_route = \App\Page::find(19);
  /*
  try{
    if( $_frontend_route && ! $_frontend_route->allowedForUser() ){
      $url = $_frontend_route->redirect ? $_frontend_route->redirect : '/';
      return redirect($url);
    }
  } catch( Exception $e ){

  }
  */
  $altrp_current_page = $_frontend_route;
  $_frontend_route['data_sources'] = $_frontend_route->page_data_sources->map(function (App\PageDatasource $page_data_source) {
    if ($page_data_source->source) {
      $page_data_source->source->web_url = $page_data_source->source->web_url;
    }
    return $page_data_source;
  });
  $model_data = [];
  $params_string = '';
  if( false !== false && $_frontend_route['model'] ) {
    $model = $_frontend_route['model']->toArray();
    if( isset( $model['namespace'] ) ){
      try {
        $relations = App\Altrp\Relationship::where( [['model_id',$model['id']],['always_with',1]] )->get()->implode( 'name', ',' );
        $relations = $relations ? explode( ',',$relations ) : false;
        $model = new $model['namespace'];
        if ( $relations ) {
          $model = $model->load( $relations );
        }
        $model = $model->find( 0 );
        if( ! $model ){
          throw new \Symfony\Component\HttpKernel\Exception\NotFoundHttpException( 'Model not found' );
        }
        $model_data = $model->toArray();
        $altrp_env = $model_data;
      } catch( Exception $e ) {
        $model_data = [];
      }
    }
  }
  $datasources = getDataSources( $_frontend_route['id'], func_get_args(), $params_string );
  $preload_content = \App\Page::getPreloadPageContent( $_frontend_route['id'] );
  $preload_content['content'] = replaceContentWithData( $preload_content['content'] );
  $page_areas = \App\Page::get_areas_for_page( $_frontend_route['id'] );
  $lazy_sections = [];
  $elements_list = extractElementsNames( $page_areas , ! ! $preload_content['content']);
  $altrp_settings = getAltrpSettings( $_frontend_route['id'] );

  if (\App\Page::isCached( $_frontend_route['id'] )) {
    global $altrp_need_cache;
    $altrp_need_cache = true;
    global $altrp_route_id;
    $altrp_route_id = $_frontend_route['id'];
  }
  $pages = \App\Page::get_pages_for_frontend( true, $_frontend_route['id'], ! ! $preload_content['content'] );

  return view( 'front-app', [
    'page_areas' => json_encode( $page_areas ),
    'altrp_settings' => json_encode( $altrp_settings ),
    'lazy_sections' => json_encode( $lazy_sections ),
    'elements_list' => json_encode( $elements_list ),
    'page_id' => $_frontend_route['id'],
    'title' => 'Добавить личные данные',
    '_frontend_route' => $_frontend_route,
    'pages'=> $pages,
    'preload_content' => $preload_content,
    'model_data' => $model_data,
    'datasources' => $datasources,
    'is_admin' => isAdmin(),
  ]);
})->middleware(['web', 'installation.checker', 'after'])->name( 'page_' . 19);